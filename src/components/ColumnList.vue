<template>
  <div class="row">
    <div v-for="colum in columnList" :key="colum.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="colum.avatar" :alt="colum.title" class="rounded-circle border border-light w-25 my-3">
          <h5 class="card-title">{{ colum.title }}</h5>
          <p class="card-text text-left"> {{ colum.description }}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = require('@/assets/column.jpeg')
        }
        return column
      })
    })
    return {
      columnList
    }
  }
})
</script>

<style scoped>

</style>
