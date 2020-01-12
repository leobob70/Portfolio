<template>
  <div>
    <h1>LÉO BERNIER</h1>
    <Menu class="menu"/>
    <ProgressBar/>
  </div>
</template>

<script>

import Menu from './Menu.vue';
import ProgressBar from './ProgressBar.vue';

export default {
  name: 'Accueil',
  components: {
    Menu,
    ProgressBar
  }
}
</script>

<style>

h1 {
  position : absolute;
  top : 10vh;
  font-size: 10vw;
  animation: rotateLeft 2s;
  right :10%;
  animation-timing-function: cubic-bezier(.66,.92,.25,.96);
}

.menu {
  position: absolute;
  bottom: 10%;
  left : 50px;
  font-size : calc( 3vw + 6px ) ;
  animation: rotateRight 1s;
  animation-timing-function: cubic-bezier(.66,.92,.25,.96);
}

.menu p {
  margin: 0;
}

@keyframes rotateRight {
  0% {
      opacity: 0;
      transform-origin: 50% 0;
      transform: perspective(400px) rotateY(20deg) translateZ(-400px) translateX(-150px); 
    }
  100% {
      opacity: 1;
      transform-origin: 0 0;
      ransform: perspective(400px) rotateY(0deg) translate3d(0px) translateX(0px); ; 
    } 
  }

  @keyframes rotateLeft {
  0% {
      opacity: 0;
      transform-origin: 50% 0;
      transform: perspective(400px) rotateY(20deg) translateZ(400px) translateX(1500px); 
    }
  100% {
      opacity: 1;
      transform-origin: 0 0;
      ransform: perspective(400px) rotateY(0deg) translate3d(0px) translateX(-150px); ; 
    } 
  }
</style>
