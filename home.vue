<template>
    <div>
        <canvas ref="canvas" width="400" height="400"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const canvas = ref(null)
onMounted(() => {
    if (!canvas.value.getContext) {
        console.log("error"); // canvas.value not supported, exit.
    } else {
        const ctx = canvas.value.getContext('2d');
        // Draw body
        ctx.beginPath();
        ctx.arc(200, 200, 50, 0, Math.PI * 2);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.closePath();

        // Draw head
        ctx.beginPath();
        ctx.arc(200, 160, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        // Draw eyes
        ctx.beginPath();
        ctx.arc(185, 155, 5, 0, Math.PI * 2);
        ctx.arc(215, 155, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();

        // Draw legs
        ctx.beginPath();
        ctx.moveTo(175, 220);
        ctx.lineTo(155, 240);
        ctx.lineTo(165, 250);
        ctx.stroke();

        ctx.moveTo(225, 220);
        ctx.lineTo(245, 240);
        ctx.lineTo(235, 250);
        ctx.stroke();

        // Draw tail
        ctx.beginPath();
        ctx.moveTo(150, 200);
        ctx.lineTo(130, 190);
        ctx.lineTo(130, 210);
        ctx.fill();

        // Draw shell
        ctx.beginPath();
        ctx.arc(200, 200, 60, 0, Math.PI, true);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.closePath();
    }
})
</script>

<style scoped>
canvas {
    border: 1px solid #000;
}
</style>