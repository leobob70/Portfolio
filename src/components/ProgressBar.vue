<template>
    <div class="progress-bar"></div>

</template>

<script>
export default {
    
}
</script>

<style>
.progress-bar {
    position : absolute;
    height: 9px;
    background: white;
    border-radius: 15px;
    bottom : 60px;
    left : calc(90% - 98.5px) ;
    animation: progress 6s linear infinite;
    opacity: 0.5;
}

@keyframes progress {
    from { width : 0px} to { width : 197px}
}

.progress-bar::before {
    content : '';
    position: absolute;
    left : 0;
    bottom: 0;
    width: 197px;
    height: 7px;
    border: 1px white solid;
    border-radius: 15px;
}
</style>