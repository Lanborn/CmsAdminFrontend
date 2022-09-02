import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '@/store/types'
import router from '@/router'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId,
  getCaptcha
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import localCache from '@/utils/cache'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'

import { ElMessage } from 'element-plus'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: {
        nav: []
      },
      captCha: {},
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      const routes = mapMenusToRoutes(userMenus)

      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    },
    changeCaptcha(state, captcha: any) {
      state.captCha = captcha
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      if (loginResult.code === 400) {
        ElMessage.error({
          type: 'error',
          center: true,
          showClose: true,
          message: loginResult.msg
        })
        dispatch('getLoginCodeAction')
      } else {
        const { token } = loginResult.data
        commit('changeToken', token)
        localCache.setCache('token', token, true)

        dispatch('getInitialDataAction', null, { root: true })

        const userInfoResult = await requestUserInfoById()
        const userInfo = userInfoResult.data
        commit('changeUserInfo', userInfo)
        localCache.setCache('userInfo', userInfo, true)

        const userMenuResult = await requestUserMenusByRoleId()
        const userMenus = userMenuResult.data.nav
        commit('changeUserMenus', userMenus)
        localCache.setCache('userMenus', userMenus, true)
        router.push('/main')
      }
    },
    async getLoginCodeAction({ commit }) {
      const codeResult = await getCaptcha()
      const code = codeResult.data
      commit('changeCaptcha', code)
      localCache.setCache('code.token', code.token, true)
      localCache.setCache('code.captchaImg', code.captchaImg, true)
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
        dispatch('getInitialDataAction', null, { root: true })
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
