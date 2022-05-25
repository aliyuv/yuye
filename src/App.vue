<template>
  <div class="container">
    <GlobalHeader :user="currentUser"></GlobalHeader>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2022 余也专栏</li>
          <li class="list-inline-item">我❤</li>
          <li class="list-inline-item">厄</li>
          <li class="list-inline-item">加</li>
          <li class="list-inline-item">特</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'

const currentUser: UserProps = {
  isLogin: false,
  name: 'aliyu'
}

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup () {
    return {
      currentUser
    }
  }
})
</script>

<style>
</style>
