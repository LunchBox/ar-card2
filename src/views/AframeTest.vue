<script setup>
import { ref } from 'vue'
const message = ref('hello world')
</script>
<template>
  <a-scene background="color: skyblue">
    <a-assets>
      <a-mixin
        id="spinbox"
        geometry="primitive: octahedron; radius: 0.4"
        animation__rotx="property: object3D.rotation.x; from: 0; to: 359; easing: linear; dur: 8000; loop: true"
        animation__roty="property: object3D.rotation.y; from: 0; to: 359; easing: linear; dur: 10000; loop: true"
      ></a-mixin>
      <a-mixin
        id="label"
        text="color: black; align: center; baseline: center; anchor: center; wrapCount: 75"
      ></a-mixin>

      <a-mixin
        id="anime"
        animation="property: position; from: 0 0 0; to: 4 0 0; dur: 250; easing: easeInCubic; loop: false"
        animation__2="property: opacity; from:0; to: 1; dur: 250; easing: easeInCubic; loop: false"
      ></a-mixin>
    </a-assets>
    <a-entity
      mixin="spinbox"
      position="0 0 -6"
      material="roughness: 1"
    ></a-entity>
    <a-text mixin="label" value="standard" position="0 2.7 -3"></a-text>

    <!--  從頂上往下看  -->
    <a-entity>
      <a-plane
        position="0 0 -6"
        rotation="0 0 0"
        width="4"
        height="2"
        color="#ccc"
      ></a-plane>
    </a-entity>

    <a-entity position="-2 1 -5.8">
      <a-text
        position="0 0 0"
        value="line 1"
        color="#cb4720"
        negate="false"
        opacity="0"
        mixin="anime"
        animation="delay: 250;"
        animation__2="delay: 250;"
      ></a-text>
    </a-entity>
    <a-entity position="-2 0.7 -5.8">
      <a-text
        position="0 0 0"
        value="line 2"
        color="#cb4720"
        negate="false"
        opacity="0"
        mixin="anime"
        animation="delay: 500;"
        animation__2="delay: 500;"
      ></a-text>
    </a-entity>
    <a-entity position="-2 0.4 -5.8">
      <a-text
        position="0 0 0"
        value="line 3"
        color="#cb4720"
        negate="false"
        opacity="0"
        mixin="anime"
        animation="delay: 750;"
        animation__2="delay: 750;"
      ></a-text>
    </a-entity>
    <a-entity position="-2 0.1 -5.8">
      <a-text
        position="0 0 0"
        value="line 4"
        color="#cb4720"
        negate="false"
        opacity="0"
        mixin="anime"
        animation="delay: 1000;"
        animation__2="delay: 1000;"
      ></a-text>
    </a-entity>
    <a-entity position="-2 -0.2 -5.8">
      <a-circle rotation="0 0 0" radius="0.2"></a-circle>
      <a-text
        position="0 0 0"
        :value="message"
        color="#cb4720"
        negate="false"
        opacity="0"
        mixin="anime"
        animation="delay: 1250;"
        animation__2="delay: 1250;"
      ></a-text>
    </a-entity>
    <MyComponent></MyComponent>

    <a-camera position="0 0 0" look-controls="enabled: true"></a-camera>
  </a-scene>
</template>
