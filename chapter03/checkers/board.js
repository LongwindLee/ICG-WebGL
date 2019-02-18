import {pointsToBuffer} from 'GLHelper';
import {initArrayBuffer, arrayToBuffer} from './utils';


// 棋盘类
export default class Board {
  constructor(gameBoard, gl, vColor, vPosition, vNumber) {
    this.gameBoard = gameBoard;
    this.points = [];
    this.nums = [];
    this.colors = [];
    this.indices = [];
    this.gl = gl;
    this.vPosition = vPosition;
    this.vColor = vColor;
    this.vNumber = vNumber;
    this.getBoardPoints();
  }

  // 棋盘建模，棋盘尺寸是1*1
  //  v0------v3
  //  |  \     |
  //  |    \   |
  //  v1------v2
  // 8*8格子，每个格子四个顶点两个三角形
  getBoardPoints() {
    let counter = 0;
    for(let i = 0; i < 8; i++) {
      for(let j = 0; j < 8; j++) {
        this.points.push([j / 8, 1 - i / 8, 0]);
        this.points.push([j / 8, 1 - (i + 1) / 8, 0]);
        this.points.push([(j + 1) / 8, 1 - (i + 1) / 8, 0]);
        this.points.push([(j + 1) / 8, 1 - i / 8, 0]);
        this.nums.push(i * 8 + j + 1, i * 8 + j + 1, i * 8 + j + 1, i * 8 + j + 1);
        if((i + j) % 2 === 0) {
          this.colors.push([1.0, 1.0, 0], [1.0, 1.0, 0], [1.0, 1.0, 0], [1.0, 1.0, 0]);
        } else {
          this.colors.push([1.0, 0, 0], [1.0, 0, 0], [1.0, 0, 0], [1.0, 0, 0]);
        }
        this.indices.push(
          0 + counter,
          1 + counter,
          2 + counter,
          0 + counter,
          2 + counter,
          3 + counter
        );

        counter += 4;
      }
    }
  }


  draw() {
    const gl = this.gl;
    const vColor = this.vColor;
    const vPosition = this.vPosition;
    const vNumber = this.vNumber;
    if(!initArrayBuffer(gl, vColor, pointsToBuffer(this.colors), gl.FLOAT, 3)) {
      return -1;
    }
    if(!initArrayBuffer(gl, vPosition, pointsToBuffer(this.points), gl.FLOAT, 3)) {
      return -1;
    }
    if(
      !initArrayBuffer(
        gl,
        vNumber,
        arrayToBuffer(this.nums, Uint8Array),
        gl.UNSIGNED_BYTE,
        1
      )
    ) {
      return -1;
    }

    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      arrayToBuffer(this.indices, Uint8Array),
      gl.STATIC_DRAW
    );

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_BYTE, 0);
  }


  clickBoardHandler() {}
}