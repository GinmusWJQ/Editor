/*
 * @Author: ginmus wjq20010505@163.com
 * @Date: 2023-11-26 17:24:24
 * @LastEditors: ginmus wjq20010505@163.com
 * @LastEditTime: 2023-11-26 17:39:42
 * @FilePath: \Editor\example\src\vite-env.d.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
/// <reference types="vite/client" />
declare module '*.vue' {
  import { ComponentOptions } from "vue";
  const componentOptions: ComponentOptions
  export default componentOptions
}