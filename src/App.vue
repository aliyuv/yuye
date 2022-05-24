<template>
  <div class="container">
    <GlobalHeader :user="currentUser"></GlobalHeader>
    <!--    <columnList :list="list"></columnList>-->
    <validate-form @form-submit="onFromSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules" v-model="emailVal" ref="inputRef"></validate-input>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">密码</label>
        <validate-input v-model="passwordVal" :rules="passwordRules"></validate-input>
      </div>
      <template #submit>
        <span class="btn btn-danger">提交</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import columnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'

const currentUser: UserProps = {
  isLogin: true,
  name: 'aliyu'
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是的test3专栏，有一段非常有意思的简介，可以更新一下欧这是的test3专栏，有一段非常有意思的简介，可以更新一下欧这是的test3专栏，有一段非常有意思的简介，可以更新一下欧这是的test3专栏，有一段非常有意思的简介，可以更新一下欧这是的test3专栏，有一段非常有意思的简介，可以更新一下欧这是的test3专栏，有一段非常有意思的简介，可以更新一下欧这是的test3专栏，有一段非常有意思的简介，可以更新一下欧这是的test3专栏，有一段非常有意思的简介，可以更新一下欧这是的test3专栏，有一段非常有意思的简介，可以更新一下欧这是的test3专栏，有一段非常有意思的简介，可以更新一下欧'
    // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是的test4专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    // columnList,
    GlobalHeader,
    ValidateInput,
    ValidateForm
  },
  setup () {
    const inputRef = ref<any>()
    const emailVal = ref('aliyu@test.com')
    const emailRules: RulesProp = [
      {
        type: 'required',
        message: '电子邮箱地址不能为空'
      },
      {
        type: 'email',
        message: '请输入正确的电子邮箱格式'
      }
    ]
    const passwordVal = ref('123')
    const passwordRules: RulesProp = [
      {
        type: 'required',
        message: '密码不能为空'
      }
    ]
    const onFromSubmit = (result: boolean) => {
      console.log(inputRef.value.validateInput())
    }
    return {
      list: testData,
      currentUser,
      emailRules,
      emailVal,
      onFromSubmit,
      inputRef,
      passwordVal,
      passwordRules
    }
  }
})
</script>

<style>
</style>
