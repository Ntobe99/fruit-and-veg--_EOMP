<template>
    <div>
        <div class="spinner-container">
    <div class="spinner">
      <div class="spinner-inner">
        <div class="spinner-line"></div>
        <div class="spinner-line"></div>
        <div class="spinner-line"></div>
        <div class="spinner-line"></div>
        <div class="spinner-line"></div>
        <div class="spinner-line"></div>
        <div class="spinner-line"></div>
        <div class="spinner-line"></div>
      </div>
    </div>
  </div>
    </div>
</template>

<script>

    export default {
        
    }
</script>

<style  scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.spinner {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.spinner-line {
  position: absolute;
  border: 4px solid #fff;
  opacity: 0.4;
  border-radius: 50%;
  animation: spinner-line 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}

.spinner-line:nth-child(1) {
  animation-delay: -0.036s;
  transform: rotate(0deg);
}

.spinner-line:nth-child(2) {
  animation-delay: -0.072s;
  transform: rotate(45deg);
}

.spinner-line:nth-child(3) {
  animation-delay: -0.108s;
  transform: rotate(90deg);
}

.spinner-line:nth-child(4) {
  animation-delay: -0.144s;
  transform: rotate(135deg);
}

.spinner-line:nth-child(5) {
  animation-delay: -0.18s;
  transform: rotate(180deg);
}

.spinner-line:nth-child(6) {
  animation-delay: -0.216s;
  transform: rotate(225deg);
}

.spinner-line:nth-child(7) {
  animation-delay: -0.252s;
  transform: rotate(270deg);
}

.spinner-line:nth-child(8) {
  animation-delay: -0.288s;
  transform: rotate(315deg);
}

.spinner-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}

@keyframes spinner-line {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 0;
  }
}

</style>