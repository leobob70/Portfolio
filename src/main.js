import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

document.body.classList.add('js-loading');
window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove('js-loading');
  followMouse();
}

var $ = document.querySelector.bind(document);

var ymouse, xmouse;
document.addEventListener('mousemove', function (e) {
    xmouse = e.clientX || e.pageX;
    ymouse = e.clientY || e.pageY;
});

var ball = $('#ball');
var x = void 0,
    y = void 0,
    dx = void 0,
    dy = void 0,
    tx = 0,
    ty = 0,
    key = -1;

var followMouse = function followMouse() {
    key = requestAnimationFrame(followMouse);

    if(!x || !y) {
          x = xmouse;
          y = ymouse;
    } else {
          dx = (xmouse - x) * 0.125;
          dy = (ymouse - y) * 0.125;
          if(Math.abs(dx) + Math.abs(dy) < 0.1) {
              x = xmouse;
              y = ymouse;
          } else {
              x += dx;
              y += dy;
          }
    }
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
};