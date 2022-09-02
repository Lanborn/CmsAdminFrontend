import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './modules/login/login'
import system from './modules/main/system/system'

import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'coderLan',
      age: 19,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
