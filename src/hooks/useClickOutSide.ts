import { ref, onMounted, onUnmounted, Ref } from 'vue'

const useClickOutSide = (elementRef: Ref<null | HTMLElement>) => {
  /* 是否点击到外面 */
  const isClickOutside = ref(false)
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      isClickOutside.value = !!elementRef.value?.contains(e.target as HTMLElement)
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return handler
}

export default useClickOutSide
