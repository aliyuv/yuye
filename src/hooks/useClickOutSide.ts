import { ref, onMounted, onUnmounted, Ref } from 'vue'

const useClickOutSide = (elementRef: Ref<null | HTMLElement>) => {
  /* 是否点击到外面 */
  const isClickOutside = ref(false)
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      // isClickOutside.value = !!elementRef.value.contains(e.target as HTMLElement)
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutside
}

export default useClickOutSide
