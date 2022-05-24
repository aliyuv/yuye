<template>
  <form class="valid-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, reactive } from 'vue'
import mitt from 'mitt'

type ValiddateFunc = () => boolean
// 这个定义是让事件和对应的 callback 一一对应
type Events = { 'form-item-created': ValiddateFunc }
// 实例化 mitt 的时候，作为泛型传递进去
export const emitter = mitt<Events>()
export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    let funcAr: ValiddateFunc[] = []
    const submitForm = () => {
      const result = funcAr.map(func => func()).every(result => result)
      context.emit('form-submit', result)
    }
    const callback = (func: ValiddateFunc) => {
      funcAr.push(func)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funcAr = []
    })
    return {
      submitForm
    }
  }
})
</script>

<style scoped>

</style>
