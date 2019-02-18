// 给buffer传值
function initArrayBuffer(gl, a_attribute, data, type, num) {
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
  gl.vertexAttribPointer(a_attribute, num, type, false, 0, 0);
  gl.enableVertexAttribArray(a_attribute);
  return true;
}
// 类型转换
function arrayToBuffer(arr, Type = Uint8Array) {
  const len = arr.length;
  const buffer = new Type(len);
  let idx = 0;
  for(let i = 0; i < len; i++) {
    buffer[idx++] = arr[i];
  }
  return buffer;
}

// 得到点击的二维坐标
function getClickContent(num) {
  const i = Math.floor((num % 64) / 8);
  const j = (num % 64) % 8;
  return [i, j];
}

// 计算棋子绘制中心点
function getPiecesPointCenter(i, j) {
  return [(2 * j + 1) / 16, 1 - (2 * i + 1) / 16];
}

const standardBoard = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 2, 0, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 2, 0, 2],
  [2, 0, 2, 0, 2, 0, 2, 0],
];

export {initArrayBuffer, arrayToBuffer, getClickContent, getPiecesPointCenter, standardBoard};