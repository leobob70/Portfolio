<template>
  <div id="app">

    <svg>
        <filter id="noise" x='0%' y='0%' width='100%' height='100%'>
            <feTurbulence type="fractalNoise" baseFrequency="0.009 0.004" result="NOISE" numOctaves="1" id="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="50"></feDisplacementMap>
        </filter>
    </svg>

    <Accueil/>

    <div class="background">
    </div>
    <div id="ball"></div>
  </div>
</template>

<script>

import Accueil from './components/Accueil.vue'
import { TimelineLite } from 'gsap';

export default {
  name: 'app',
  components: {
    Accueil
  },
  mounted(){
    const noise = document.getElementById('turbulence');
    const timeline = new TimelineLite() 
    timeline.to(noise, 3, {attr: { baseFrequency: '0 0' }});
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Catamaran:400,600&display=swap');

.js-loading *,
.js-loading *:before,
.js-loading *:after {
  animation-play-state: paused !important;
  filter : none;
}

body, html {
  margin : 0;
  padding: 0;
}

body {
  background-size: cover;
  font-family: 'Catamaran', sans-serif;
  font-weight : 400;
  background : black;
  color : #dedfda;
  overflow: hidden;
}

svg {
    position: absolute;
} 

.background {
  position: absolute;
  width: 100%;
  height : 100vh;
  z-index : -1;
  background: url(./assets/images/moutains.jpg);
  background-size: cover;
  filter: url(#noise);
}

#ball {
     width: 80px;
     height: 80px;
     background: none;
     border: 2px solid white;
     border-radius: 50%;
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%,-50%);
     pointer-events: none;
}
</style>
