export default class Controller {
  constructor(canvas, setMatrix, draw) {
    this.canvas = canvas;
    this.draw = draw;
    this.setMVPMatrix = setMatrix;
  }

  register() {
    const setMVPMatrix = this.setMVPMatrix;
    const draw = this.draw;
    const canvas = this.canvas;
    const currentAngle = [0.0, 0.0];
    this.initEventHandlers(this.canvas, currentAngle);
    const pitch = document.getElementById('pitch');
    const yaw = document.getElementById('yaw');
    const tick = function () {
      setMVPMatrix(currentAngle);
      // setMVPMatrix(currentAngle[1], 'rotateYaw');
      pitch.innerHTML = Math.round((currentAngle[0] * 360) / Math.PI) % 360;
      yaw.innerHTML = Math.round((currentAngle[1] * 360) / Math.PI) % 360;
      draw();
      requestAnimationFrame(tick, canvas);
    };
    tick();
  }

  initEventHandlers(canvas, currentAngle) {
    let dragging = false; // Dragging or not
    let lastX = -1,
      lastY = -1; // Last position of the mouse

    canvas.onmousedown = function (ev) {
      // Mouse is pressed
      const x = ev.clientX;
      const y = ev.clientY;
      // Start dragging if a moue is in <canvas>
      const rect = ev.target.getBoundingClientRect();
      if(
        rect.left <= x
        && x < rect.right
        && rect.top <= y
        && y < rect.bottom
      ) {
        lastX = x;
        lastY = y;
        dragging = true;
      }
    };

    canvas.onmouseup = function (ev) {
      dragging = false;
    };

    canvas.onmousemove = function (ev) {
      // Mouse is moved
      const x = ev.clientX;
      const y = ev.clientY;
      if(dragging) {
        const factor = 10 / canvas.height; // The rotation ratio
        const dx = factor * (x - lastX);
        const dy = factor * (y - lastY);
        // Limit x-axis rotation angle to -90 to 90 degrees
        currentAngle[0] += dy;
        currentAngle[1] += dx;
      }
      lastX = x;
      lastY = y;
    };
  }
}
