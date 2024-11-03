<template>
    <div>
        <canvas ref="canvas" width="400" height="400"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const canvas = ref(null);
onMounted(() => {
    console.log("组件", canvas.value);
});
</script>

<style scoped>
canvas {
    border: 1px solid #000;
}
</style>