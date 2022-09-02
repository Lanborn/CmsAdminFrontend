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

      // userMenus => routes
      const routes = mapMenusToRoutes(userMenus)

      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 获取用户按钮的权限
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
      const { token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token, true)

      dispatch('getInitialDataAction', null, { root: true })

      // 2. 请求用户信息的数据
      const userInfoResult = await requestUserInfoById()
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo, true)

      // 3. 获取用户菜单
      const userMenuResult = await requestUserMenusByRoleId()
      const userMenus = userMenuResult.data.nav
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus, true)
      // 跳转到首页
      router.push('/main')
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
