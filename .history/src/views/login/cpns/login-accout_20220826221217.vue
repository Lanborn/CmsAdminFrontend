<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="username">
        <el-input v-model="account.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>

      <el-form-item label="Code" prop="code" style="width: 380px">
        <el-input
          v-model="account.code"
          style="width: 102px; float: left"
          maxlength="5"
        ></el-input>
        <el-image
          :src="captchaImg"
          class="captchaImg"
          @click="getNewCaptcha"
        ></el-image>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm, ElMessage } from 'element-plus'
import localCache from '@/utils/cache'
import { rules } from '../config/account-config'
export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      username: localCache.getCache('username') ?? '',
      password: localCache.getCache('password') ?? '',
      code: '',
      token: localCache.getCache('code.token')
    })

    const captchaImg = ref(localCache.getCache('code.captchaImg'))

    store.dispatch('login/getLoginCodeAction')

    const getNewCaptcha = () => {
      store.dispatch('login/getLoginCodeAction')
    }

    const formRef = ref<InstanceType<typeof ElForm>>() // 将某个组件转化成类型

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1. 判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            localCache.setCache('username', account.username, true)
            localCache.setCache('password', account.password, true)
          } else {
            localCache.deleteCache('username')
            localCache.deleteCache('password')
          }
          // 2. 开始进行登陆验证
          store.dispatch('login/accountLoginAction', {
            ...account
          })
        } else {
          ElMessage({
            message: '请输入正确的账号密码~',
            type: 'error'
          })
        }
      })
    }
    return {
      account,
      rules,
      formRef,
      captchaImg,
      loginAction,
      getNewCaptcha
    }
  }
})
</script>

<style scoped lang="less">
.captchaImg {
  float: left;
  margin-left: 8px;
  border-radius: 4px;
}
</style>
