import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './types'

import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0,
      categoryList: [],
      categoryCount: 0
    }
  },
  mutations: {
    changeUsersList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUsersCount(state, userCount: number) {
      state.usersCount = userCount
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    },
    changeGoodsList(state, list: any[]) {
      state.goodsList = list
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count
    },
    changeMenuList(state, list: any[]) {
      console.log(list)

      state.menuList = list
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count
    },
    changeDepartmentList(state, payload) {
      state.departmentList = payload
    },
    changeDepartmentCount(state, payload: number) {
      state.departmentCount = payload
    },
    changeCategoryList(state, list: any[]) {
      state.categoryList = list
    },
    changeCategoryCount(state, payload: number) {
      state.categoryCount = payload
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        console.log(pageName)

        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      console.log(payload)

      // 1.??????pageUrl
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`

      // // 2.?????????????????????
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      if (pageName === 'menu') {
        commit('changeMenuList', pageResult.data)
      } else {
        // // 3.??????????????????state???
        const { records, total } = pageResult.data

        const changePageName =
          pageName.slice(0, 1).toUpperCase() + pageName.slice(1)

        console.log(changePageName)

        commit(`change${changePageName}List`, records)
        commit(`change${changePageName}Count`, total)
      }
    },

    async deletePageDataAction({ dispatch }, payload: any) {
      // 1.??????pageName???id
      // pageName -> /users
      // id -> /users/id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`

      // 2.????????????????????????
      await deletePageData(pageUrl)

      // 3.???????????????????????????
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    async createPageDataAction({ dispatch }, payload: any) {
      // 1.?????????????????????
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)

      // 2.?????????????????????
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    async editPageDataAction({ dispatch }, payload: any) {
      // 1.?????????????????????
      const { pageName, editData, id } = payload
      console.log(editData)
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)

      // 2.?????????????????????
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
