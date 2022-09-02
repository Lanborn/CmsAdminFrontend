import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './types'

import { ElMessage } from 'element-plus'

import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData,
  deleteMenuData
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
      categoryCount: 0,
      issueList: [],
      issueCount: 0
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
    },
    changeBugIssueList(state, list: any[]) {
      state.issueList = list
    },
    changeBugIssueCount(state, count: number) {
      state.issueCount = count
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        if (pageName === 'bug/issue') {
          return (state as any)['issueList']
        }
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        if (pageName === 'bug/issue') {
          return (state as any)['issueCount']
        }
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`

      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      if (pageName === 'menu') {
        commit('changeMenuList', pageResult.data)
      } else if (pageName === 'bug/issue') {
        commit('changeBugIssueList', pageResult.data.records)
      } else {
        const { records, total } = pageResult.data

        const changePageName =
          pageName.slice(0, 1).toUpperCase() + pageName.slice(1)

        commit(`change${changePageName}List`, records)
        commit(`change${changePageName}Count`, total)
      }
    },

    async deletePageDataAction({ dispatch }, payload: any) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}`

      if (pageName === 'menu') {
        const res = await deleteMenuData(pageUrl, id)
        if (res.code === 400) {
          ElMessage.error({
            type: 'error',
            center: true,
            showClose: true,
            message: res.msg
          })
        }
      } else {
        const res = await deletePageData(pageUrl, id)
        if (res.code === 400) {
          ElMessage.error({
            type: 'error',
            center: true,
            showClose: true,
            message: res.msg
          })
        }
      }

      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    async createPageDataAction({ dispatch }, payload: any) {
      console.log(payload)

      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      console.log(newData)

      const res = await createPageData(pageUrl, newData)

      if (res.code === 400) {
        ElMessage.error({
          type: 'error',
          center: true,
          showClose: true,
          message: res.msg
        })
      }

      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    async editPageDataAction({ dispatch }, payload: any) {
      console.log(payload)

      const { pageName, editData, id } = payload
      console.log(editData, id)
      const pageUrl = `/${pageName}`
      const res = await editPageData(pageUrl, editData)

      if (res.code === 400) {
        ElMessage.error({
          type: 'error',
          center: true,
          showClose: true,
          message: res.msg
        })
      }

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
