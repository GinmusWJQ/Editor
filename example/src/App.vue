<!--
 * @Author: ginmus wjq20010505@163.com
 * @Date: 2023-11-26 17:24:24
 * @LastEditors: ginmus wjq20010505@163.com
 * @LastEditTime: 2023-11-26 18:35:12
 * @FilePath: \Editor\example\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup lang="ts">
import { EditorEle } from '@editor/lib';
import { onMounted, ref } from 'vue';

const wrapper = ref<HTMLDivElement>();
onMounted(() => {
  const obj = new EditorEle(wrapper.value!);
  console.log(obj);

})
</script>

<template>
  <div ref="wrapper">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
