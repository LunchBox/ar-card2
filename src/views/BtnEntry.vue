<script setup>
defineProps(['text'])
</script>
<template>
  <a-entity position="-2 -0.2 -5.8">
    <a-circle position="0 0 0" radius="0.2"></a-circle>
    <a-plane
      position="0 0 -5.8"
      rotation="0 0 0"
      width="4"
      height="0.4"
      color="#ccc"
    ></a-plane>
    <a-text
      position="0 0 0"
      color="#cb4720"
      negate="true"
      :value="text"
    ></a-text>
    <!-- <a-circle radius="0.2" align="rigth"></a-circle> -->
  </a-entity>
</template>
