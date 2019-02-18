import {pointsToBuffer} from 'GLHelper';
import {initArrayBuffer, arrayToBuffer, standardBoard} from './utils';

// 棋子类
export default class Piece {
  constructor(gameBoard, gl, vColor, vPosition, vNumber) {
    // 棋子大小
    this.piecesSize = 0.05;
    // 棋子坐标
    this.pieces = [];
    // 棋子三角索引
    this.piecesIndices = [];
    // 棋子颜色
    this.piecesColors = [];
    // 棋子编号
    this.piecesNums = [];

    this.gameBoard = gameBoard;
    this.gl = gl;
    this.vPosition = vPosition;
    this.vColor = vColor;
    this.vNumber = vNumber;
    this.initPiece();
  }

  initPiece() {
    this.getPiece();
  }

  // 获取棋子坐标、颜色、索引、三角面
  // 棋子三角索引
  //    v0----- v3
  //   /|      /|
  //  v1------v2|
  //  | |     | |
  //  | |v4---|-|v7
  //  |/      |/
  //  v5------v6
  // 顺序为前后左右上下
  getPiece() {
    let piecesCounter = 0;
    for(let i = 0; i < 8; i++) {
      for(let j = 0; j < 8; j++) {
        if(this.gameBoard[i][j] !== 0) {
          this.piecesNums.push(
            64 + i * 8 + j + 1,
            64 + i * 8 + j + 1,
            64 + i * 8 + j + 1,
            64 + i * 8 + j + 1,
            64 + i * 8 + j + 1,
            64 + i * 8 + j + 1,
            64 + i * 8 + j + 1,
            64 + i * 8 + j + 1
          );
          const center = this.getPiecesPointCenter(i, j);
          if(this.gameBoard[i][j] < 5) {
            this.piecesSize = 0.05;
          } else {
            this.piecesSize = 0.08;
          }
          if(this.gameBoard[i][j] === 1 || this.gameBoard[i][j] === 5) {
            this.piecesColors.push(
              [0, 0, 0.5],
              [0, 0, 0.5],
              [0, 0, 0.5],
              [0, 0, 0.5],
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0]
            );
          } else if(this.gameBoard[i][j] === 2 || this.gameBoard[i][j] === 6) {
            this.piecesColors.push(
              [1, 0.5, 1],
              [1, 0.5, 1],
              [1, 0.5, 1],
              [1, 0.5, 1],
              [1, 1, 1],
              [1, 1, 1],
              [1, 1, 1],
              [1, 1, 1]
            );
          } else if(this.gameBoard[i][j] === 3 || this.gameBoard[i][j] === 7) {
            this.piecesColors.push(
              [0, 0.5, 0.5],
              [0, 0.5, 0.5],
              [0, 0.5, 0.5],
              [0, 0.5, 0.5],
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0]
            );
          } else if(this.gameBoard[i][j] === 4 || this.gameBoard[i][j] === 8) {
            this.piecesColors.push(
              [0.5, 0.5, 1],
              [0.5, 0.5, 1],
              [0.5, 0.5, 1],
              [0.5, 0.5, 1],
              [1, 1, 1],
              [1, 1, 1],
              [1, 1, 1],
              [1, 1, 1]
            );
          }

          this.pieces.push([
            center[0] - this.piecesSize / 2,
            center[1] - this.piecesSize / 2,
            0.1,
          ]);
          this.pieces.push([
            center[0] - this.piecesSize / 2,
            center[1] + this.piecesSize / 2,
            0.1,
          ]);
          this.pieces.push([
            center[0] + this.piecesSize / 2,
            center[1] + this.piecesSize / 2,
            0.1,
          ]);
          this.pieces.push([
            center[0] + this.piecesSize / 2,
            center[1] - this.piecesSize / 2,
            0.1,
          ]);
          this.pieces.push([
            center[0] - this.piecesSize / 2,
            center[1] - this.piecesSize / 2,
            0,
          ]);
          this.pieces.push([
            center[0] - this.piecesSize / 2,
            center[1] + this.piecesSize / 2,
            0,
          ]);
          this.pieces.push([
            center[0] + this.piecesSize / 2,
            center[1] + this.piecesSize / 2,
            0,
          ]);
          this.pieces.push([
            center[0] + this.piecesSize / 2,
            center[1] - this.piecesSize / 2,
            0,
          ]);
          this.piecesIndices.push(
            1 + piecesCounter,
            2 + piecesCounter,
            5 + piecesCounter,
            2 + piecesCounter,
            5 + piecesCounter,
            6 + piecesCounter,

            0 + piecesCounter,
            4 + piecesCounter,
            7 + piecesCounter,
            0 + piecesCounter,
            3 + piecesCounter,
            7 + piecesCounter,

            0 + piecesCounter,
            1 + piecesCounter,
            4 + piecesCounter,
            1 + piecesCounter,
            4 + piecesCounter,
            5 + piecesCounter,

            2 + piecesCounter,
            3 + piecesCounter,
            7 + piecesCounter,
            2 + piecesCounter,
            6 + piecesCounter,
            7 + piecesCounter,

            0 + piecesCounter,
            1 + piecesCounter,
            2 + piecesCounter,
            0 + piecesCounter,
            2 + piecesCounter,
            3 + piecesCounter,

            4 + piecesCounter,
            5 + piecesCounter,
            7 + piecesCounter,
            5 + piecesCounter,
            6 + piecesCounter,
            7 + piecesCounter
          );
          piecesCounter += 8;
        }
      }
    }
  }

  draw() {
    const gl = this.gl;
    const vColor = this.vColor;
    const vPosition = this.vPosition;
    const vNumber = this.vNumber;

    if(
      !initArrayBuffer(
        gl,
        vColor,
        pointsToBuffer(this.piecesColors),
        gl.FLOAT,
        3
      )
    ) {
      return -1;
    }
    if(
      !initArrayBuffer(gl, vPosition, pointsToBuffer(this.pieces), gl.FLOAT, 3)
    ) {
      return -1;
    }
    if(
      !initArrayBuffer(
        gl,
        vNumber,
        arrayToBuffer(this.piecesNums, Uint8Array),
        gl.UNSIGNED_BYTE,
        1
      )
    ) {
      return -1;
    }

    const piecesIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, piecesIndexBuffer);
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      arrayToBuffer(this.piecesIndices, Uint8Array),
      gl.STATIC_DRAW
    );

    gl.drawElements(
      gl.TRIANGLES,
      this.piecesIndices.length,
      gl.UNSIGNED_BYTE,
      0
    );
  }

  reset() {
    this.gameBoard = standardBoard;
    this.drawPiece();
  }

  getPiecesPointCenter(i, j) {
    return [(2 * j + 1) / 16, 1 - (2 * i + 1) / 16];
  }
}
