import {createProgram, setupWebGL} from 'GLHelper';
import {vec3, mat4} from 'gl-matrix';

import vertexShader from './shader.vert';
import fragmentShader from './shader.frag';
import Piece from './piece';
import Board from './board';
import {getClickContent} from './utils';
import Controller from './controller';

// 棋盘内容初始数组，0绘制非棋子，1、2绘制双方棋子
const gameBoard = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 2, 0, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 2, 0, 2],
  [2, 0, 2, 0, 2, 0, 2, 0],
];

let player = 1;
// 是否点击棋子1
let isPieces1Clicked = false;
// 是否点击棋子2
let isPieces2Clicked = false;

let jumpAgain = false;
let gl,
  lastPosition,
  canvas,
  u_PickedNumber,
  u_MvpMatrix,
  viewMatrix,
  projMatrix,
  modelMatrix,
  mvpMatrix,
  vColor,
  vPosition,
  vNumber,
  board,
  pieces,
  controller,
  tips;

// 更新棋子布局
function updateGameBoard() {
  pieces.pieces = [];
  pieces.piecesColors = [];
  pieces.piecesNums = [];
  pieces.piecesIndices = [];
  pieces.getPiece();
}

(function init() {
  tips = document.getElementById('tips');
  canvas = document.getElementById('gl-canvas');
  gl = setupWebGL(canvas);

  if(!gl) {
    console.error("WebGL isn't available");
  }

  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0.56, 0.93, 0.56, 1.0);

  const program = createProgram(gl, vertexShader, fragmentShader);
  gl.useProgram(program);

  gl.enable(gl.DEPTH_TEST);

  u_PickedNumber = gl.getUniformLocation(program, 'u_PickedNumber');
  gl.uniform1i(u_PickedNumber, -1);

  u_MvpMatrix = gl.getUniformLocation(program, 'u_MvpMatrix');
  const eye = vec3.fromValues(0, 0, 3),
    center = vec3.fromValues(0, 0, 0),
    up = vec3.fromValues(0, 1, 0);
  viewMatrix = mat4.create();
  projMatrix = mat4.create();
  modelMatrix = mat4.create();
  mvpMatrix = mat4.create();

  // 初始角度为x轴旋转320
  mat4.rotateX(modelMatrix, modelMatrix, (Math.PI * 2 * 320) / 360);
  mat4.lookAt(viewMatrix, eye, center, up);
  // 建模坐标在0-1之间,移至中心点，便于旋转计算
  mat4.translate(modelMatrix, modelMatrix, vec3.fromValues(-0.5, -0.5, 0.0));
  mat4.perspective(projMatrix, (Math.PI * 30) / 180, 1, 1, 100);
  mat4.multiply(mvpMatrix, projMatrix, viewMatrix);
  mat4.multiply(mvpMatrix, mvpMatrix, modelMatrix);
  gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix);

  vColor = gl.getAttribLocation(program, 'a_Color');
  vPosition = gl.getAttribLocation(program, 'a_Position');
  vNumber = gl.getAttribLocation(program, 'a_Number');

  board = new Board(gameBoard, gl, vColor, vPosition, vNumber);
  pieces = new Piece(gameBoard, gl, vColor, vPosition, vNumber);
  draw();

  controller = new Controller(canvas, setMVPMatrix, draw);
  controller.register();
}());

// 鼠标点击canvas
canvas.onclick = function handlerMousedown(evt) {
  const x = evt.clientX;
  const y = evt.clientY;
  const rect = evt.target.getBoundingClientRect();
  if(rect.left <= x && x < rect.right && rect.top <= y && y < rect.bottom) {
    const x_in_canvas = x - rect.left;
    const y_in_canvas = rect.bottom - y;
    const face = checkPieces(x_in_canvas, y_in_canvas);
    gl.uniform1i(u_PickedNumber, -1);
    const position = getClickContent(face - 1);
    if(face > 0 && face < 129) {
      handleGameboard(position);
    }
    draw();
  }
};

// 点击棋子、棋盘处理
function handleGameboard(position) {
  if(player === 1) {
    handlePlayer1(position);
  } else {
    handlePlayer2(position);
  }
}

// player1走棋
function handlePlayer1(pos) {
  if(isPieces1Clicked) {
    if(gameBoard[pos[0]][pos[1]] === 0 && canPlayer1Move(lastPosition, pos)) {
      // 棋子跳至点击处
      isPieces1Clicked = false;
      if(!jumpAgain) {
        updateGameBoard();
        player = 2;
        tips.innerHTML = '轮到白子走棋';
      } else {
        jumpAgain = false;
        handleGameboard(pos);
      }
    } else if(
      gameBoard[pos[0]][pos[1]] === 1
      || gameBoard[pos[0]][pos[1]] === 5
    ) {
      // 重新选择要走的棋子
      gameBoard[lastPosition[0]][lastPosition[1]]
        = gameBoard[lastPosition[0]][lastPosition[1]] === 3 ? 1 : 5;
      gameBoard[pos[0]][pos[1]] = gameBoard[pos[0]][pos[1]] === 1 ? 3 : 7;
      lastPosition = pos;
      updateGameBoard();
    }
  } else if(
    !isPieces1Clicked
    && (gameBoard[pos[0]][pos[1]] === 1 || gameBoard[pos[0]][pos[1]] === 5)
  ) {
    // 选择要走的棋子
    gameBoard[pos[0]][pos[1]] = gameBoard[pos[0]][pos[1]] === 1 ? 3 : 7;
    isPieces1Clicked = true;
    lastPosition = pos;
    updateGameBoard();
  }
}

// player2走棋
function handlePlayer2(pos) {
  if(isPieces2Clicked) {
    if(gameBoard[pos[0]][pos[1]] === 0 && canPlayer2Move(lastPosition, pos)) {
      isPieces2Clicked = false;
      if(!jumpAgain) {
        updateGameBoard();
        player = 1;
        tips.innerHTML = '轮到黑子走棋';
      } else {
        jumpAgain = false;
        handleGameboard(pos);
      }
    } else if(
      gameBoard[pos[0]][pos[1]] === 2
      || gameBoard[pos[0]][pos[1]] === 6
    ) {
      gameBoard[lastPosition[0]][lastPosition[1]]
        = gameBoard[lastPosition[0]][lastPosition[1]] === 4 ? 2 : 6;
      gameBoard[pos[0]][pos[1]] = gameBoard[pos[0]][pos[1]] === 2 ? 4 : 8;
      lastPosition = pos;
      updateGameBoard();
    }
  } else if(
    (!isPieces2Clicked && gameBoard[pos[0]][pos[1]] === 2)
    || gameBoard[pos[0]][pos[1]] === 6
  ) {
    gameBoard[pos[0]][pos[1]] = gameBoard[pos[0]][pos[1]] === 2 ? 4 : 8;
    isPieces2Clicked = true;
    lastPosition = pos;
    updateGameBoard();
  }
}

// 判断player1能否走棋
function canPlayer1Move(pos1, pos2) {
  const dx = pos2[0] - pos1[0];
  const dy = pos2[1] - pos1[1];
  if(dx * dx === dy * dy && gameBoard[pos2[0]][pos2[1]] === 0) {
    // 小兵、大王往前走
    if(dx === 1) {
      gameBoard[pos2[0]][pos2[1]] = gameBoard[pos1[0]][pos1[1]] === 3 ? 1 : 5;
      gameBoard[pos1[0]][pos1[1]] = 0;
      setKing(pos2);
      return true;
    }
    // 大王向后走
    if(dx === -1 && gameBoard[pos1[0]][pos1[1]] === 7) {
      gameBoard[pos1[0]][pos1[1]] = 0;
      gameBoard[pos2[0]][pos2[1]] = 5;
      return true;
    }
    // 小兵、大王往前跳
    if(
      dx === 2
      && (gameBoard[pos1[0] + dx / 2][pos1[1] + dy / 2] === 2
        || gameBoard[pos1[0] + dx / 2][pos1[1] + dy / 2] === 6)
    ) {
      gameBoard[pos1[0] + dx / 2][pos1[1] + dy / 2] = 0;
      gameBoard[pos2[0]][pos2[1]] = gameBoard[pos1[0]][pos1[1]] === 3 ? 1 : 5;
      gameBoard[pos1[0]][pos1[1]] = 0;
      setKing(pos2);
      canPlayer1JumpAgain(pos2);
      return true;
    }
    // 大王向后跳
    if(
      dx === -2
      && gameBoard[pos1[0]][pos1[1]] === 7
      && (gameBoard[pos1[0] + dx / 2][pos1[1] + dy / 2] === 2
        || gameBoard[pos1[0] + dx / 2][pos1[1] + dy / 2] === 6)
    ) {
      gameBoard[pos1[0]][pos1[1]] = 0;
      gameBoard[pos1[0] + dx / 2][pos1[1] + dy / 2] = 0;
      gameBoard[pos2[0]][pos2[1]] = 5;
      canPlayer1JumpAgain(pos2);
      return true;
    }
  }
  return false;
}

// 判断player2能否走棋
function canPlayer2Move(pos1, pos2) {
  const dx = pos2[0] - pos1[0];
  const dy = pos2[1] - pos1[1];
  if(dx * dx === dy * dy && gameBoard[pos2[0]][pos2[1]] === 0) {
    // 小兵、大王往前走
    if(dx === -1) {
      gameBoard[pos2[0]][pos2[1]] = gameBoard[pos1[0]][pos1[1]] === 4 ? 2 : 6;
      gameBoard[pos1[0]][pos1[1]] = 0;
      setKing(pos2);
      return true;
    }
    // 大王向后走
    if(dx === 1 && gameBoard[pos1[0]][pos1[1]] === 8) {
      gameBoard[pos1[0]][pos1[1]] = 0;
      gameBoard[pos2[0]][pos2[1]] = 6;
      return true;
    }
    // 小兵、大王跳着往前走
    if(
      dx === -2
      && (gameBoard[pos1[0] + dx / 2][pos1[1] + dy / 2] === 1
        || gameBoard[pos1[0] + dx / 2][pos1[1] + dy / 2] === 5)
    ) {
      gameBoard[pos1[0] + dx / 2][pos1[1] + dy / 2] = 0;
      gameBoard[pos2[0]][pos2[1]] = gameBoard[pos1[0]][pos1[1]] === 4 ? 2 : 6;
      gameBoard[pos1[0]][pos1[1]] = 0;
      setKing(pos2);
      canPlayer2JumpAgain(pos2);
      return true;
    }
    // 大王向后跳
    if(
      dx === 2
      && gameBoard[pos1[0]][pos1[1]] === 8
      && (gameBoard[pos1[0] + dx / 2][pos1[1] + dy / 2] === 1
        || gameBoard[pos1[0] + dx / 2][pos1[1] + dy / 2] === 5)
    ) {
      gameBoard[pos1[0]][pos1[1]] = 0;
      gameBoard[pos1[0] + dx / 2][pos1[1] + dy / 2] = 0;
      gameBoard[pos2[0]][pos2[1]] = 6;
      canPlayer2JumpAgain(pos2);
      return true;
    }
  }
  return false;
}

// 检测player1四个方向能否继续跳
function canPlayer1JumpAgain(pos) {
  if(
    pos[0] + 2 < 8
    && pos[1] + 2 < 8
    && gameBoard[pos[0] + 1][pos[1] + 1]
    && (gameBoard[pos[0] + 1][pos[1] + 1] === 2
      || gameBoard[pos[0] + 1][pos[1] + 1] === 6)
    && gameBoard[pos[0] + 2][pos[1] + 2] === 0
  ) {
    jumpAgain = true;
    return;
  }
  if(
    pos[0] + 2 < 8
    && pos[1] - 2 > -1
    && gameBoard[pos[0] + 1][pos[1] - 1]
    && (gameBoard[pos[0] + 1][pos[1] - 1] === 2
      || gameBoard[pos[0] + 1][pos[1] - 1] === 6)
    && gameBoard[pos[0] + 2][pos[1] - 2] === 0
  ) {
    jumpAgain = true;
    return;
  }
  if(gameBoard[pos[0]][pos[1]] === 5 && pos[0] - 2 > -1) {
    if(
      pos[1] - 2 > -1
      && gameBoard[pos[0] - 1][pos[1] - 1]
      && (gameBoard[pos[0] - 1][pos[1] - 1] === 2
        || gameBoard[pos[0] - 1][pos[1] - 1] === 6)
      && gameBoard[pos[0] - 2][pos[1] - 2] === 0
    ) {
      jumpAgain = true;
      return;
    }
    if(
      pos[1] + 2 < 8
      && gameBoard[pos[0] - 1][pos[1] + 1]
      && (gameBoard[pos[0] - 1][pos[1] + 1] === 2
        || gameBoard[pos[0] - 1][pos[1] + 1] === 6)
      && gameBoard[pos[0] - 2][pos[1] + 2] === 0
    ) {
      jumpAgain = true;
    }
  }
}

// 检测player2四个方向能否继续跳
function canPlayer2JumpAgain(pos) {
  if(
    pos[0] - 2 > -1
    && pos[1] + 2 < 8
    && gameBoard[pos[0] - 1][pos[1] + 1]
    && (gameBoard[pos[0] - 1][pos[1] + 1] === 1
      || gameBoard[pos[0] - 1][pos[1] + 1] === 5)
    && gameBoard[pos[0] - 2][pos[1] + 2] === 0
  ) {
    jumpAgain = true;
    return;
  }
  if(
    pos[0] - 2 > -1
    && pos[1] - 2 > -1
    && gameBoard[pos[0] - 1][pos[1] - 1]
    && (gameBoard[pos[0] - 1][pos[1] - 1] === 1
      || gameBoard[pos[0] - 1][pos[1] - 1] === 5)
    && gameBoard[pos[0] - 2][pos[1] - 2] === 0
  ) {
    jumpAgain = true;
    return;
  }
  if(gameBoard[pos[0]][pos[1]] === 6 && pos[0] + 2 < 8) {
    if(
      pos[1] - 2 > -1
      && gameBoard[pos[0] + 1][pos[1] - 1]
      && (gameBoard[pos[0] + 1][pos[1] - 1] === 1
        || gameBoard[pos[0] + 1][pos[1] - 1] === 5)
      && gameBoard[pos[0] + 2][pos[1] - 2] === 0
    ) {
      jumpAgain = true;
      return;
    }
    if(
      pos[1] + 2 < 8
      && gameBoard[pos[0] + 1][pos[1] + 1]
      && (gameBoard[pos[0] + 1][pos[1] + 1] === 1
        || gameBoard[pos[0] + 1][pos[1] + 1] === 5)
      && gameBoard[pos[0] + 2][pos[1] + 2] === 0
    ) {
      jumpAgain = true;
    }
  }
}

// 判断并设置棋子成王
function setKing(pos) {
  if(player === 1 && pos[0] === 7) {
    gameBoard[pos[0]][pos[1]] = 5;
  } else if(player === 2 && pos[0] === 0) {
    gameBoard[pos[0]][pos[1]] = 6;
  }
}

function setMVPMatrix(val) {
  mvpMatrix = mat4.create();
  modelMatrix = mat4.create();
  mat4.rotateX(modelMatrix, modelMatrix, val[0]);
  mat4.rotateY(modelMatrix, modelMatrix, val[1]);
  mat4.translate(modelMatrix, modelMatrix, vec3.fromValues(-0.5, -0.5, 0.0));
  mat4.multiply(mvpMatrix, projMatrix, viewMatrix);
  mat4.multiply(mvpMatrix, mvpMatrix, modelMatrix);
  gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix);
}

// 绘制canvas
function draw() {
  // gl.enable(gl.POLYGON_OFFSET_FILL);
  board.draw();
  // gl.polygonOffset(1.0, 1.0);
  pieces.draw();
}

// 找出棋子编号
function checkPieces(x, y) {
  const pixels = new Uint8Array(4);
  gl.uniform1i(u_PickedNumber, 0);
  draw();
  gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  return pixels[3];
}
