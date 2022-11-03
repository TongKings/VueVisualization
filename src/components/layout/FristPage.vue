
<template>

    <div>
        <canvas id="glCanvas" width="640" height="480">
            <!-- 这里只有开启或者支持canvas的浏览器才不会显示 -->
            你的浏览器似乎不支持或者禁用了 HTML5 <code>&lt;canvas&gt;</code> 元素。
        </canvas>
    </div>

</template>

<style scoped lang='scss'>
        canvas {
            border: 1px solid;
        }
</style>
<script setup lang='ts'>
import * as THREE from "three";
function getThreeFun(){
    let scene = new THREE.Scene();
    console.log(scene)
}
getThreeFun()
</script>

