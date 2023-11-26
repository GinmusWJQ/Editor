/*
 * @Author: ginmus wjq20010505@163.com
 * @Date: 2023-11-26 17:58:03
 * @LastEditors: ginmus wjq20010505@163.com
 * @LastEditTime: 2023-11-26 18:55:33
 * @FilePath: \Editor\lib\src\core\editorEle.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
export class EditorEle {
  public $el = document.createElement('div');
  protected $wrapper: HTMLElement;

  constructor(wrapper: HTMLElement) {
    this.$wrapper = wrapper;
    this.initEle();
    wrapper.appendChild(this.$el);
  }

  /**
   * initEle 设置$el的基础属性
   */
  public initEle() {
    this.$el.setAttribute('contenteditable', 'true');
  }
}
