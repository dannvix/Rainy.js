var Rainyjs = (function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;

  function Particle (canvas) {
    this.effective = true;
    this.l = Math.random() * 40 + 60; // luminance
    this.a = Math.random() * 0.3 + 0.3; // opacity
    this.x = Math.random() * canvas.width; // x-axis location
    this.y = 0; // y-axis location
    this.speedY = Math.random() * 2 + 2; // y-axis speed
    this.size = Math.random() * 45; // rainfall length
  };

  Particle.prototype.draw = function (ctx) {
    // ctx: canvas.getContext("2d")
    ctx.strokeStyle = "hsla(0, 0%, " + this.l + "%, " + this.a + ")";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - this.size);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
  };

  Particle.prototype.step = function (canvas) {
    this.y += this.speedY; // fall down
    this.speedY += 0.1; // accelerate by gravity
    this.a -= 0.001; // fade out

    if (this.y > canvas.height) {
      this.effective = false;
    }
  };

  function Application () {
    this.canvas = document.querySelector("#rainyjs");
    this.level = 10;
    return this;
  };

  Application.prototype.setCanvas = function (selector) {
    this.canvas = document.querySelector(selector);
    return this;
  };

  Application.prototype.setLevel = function (lvl) {
    this.level = lvl;
    return this;
  }

  Application.prototype.rain = function() {
    var that = this;
    var resizeCanvasToFit = function() {
      that.canvas.width = window.innerWidth;
      that.canvas.height = window.innerHeight;
    };
    resizeCanvasToFit();
    window.addEventListener("resize", resizeCanvasToFit, false);

    this.particles = [];
    var step = function(timestamp) {
      var i, filtered, p;
      var ctx = that.canvas.getContext("2d");
      ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);

      // remove ineffective particles
      filtered = that.particles.filter(function(p){return p.effective;});
      that.particles = filtered;

      // generate new particles
      for (i = 0; i < that.level; i++) {
        that.particles.push(new Particle(that.canvas));
      }

      // move current particles
      for (i = 0; i < that.particles.length; i++) {
        p = that.particles[i];
        p.draw(ctx);
        p.step(that.canvas);
      } 

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return Application;
})();
