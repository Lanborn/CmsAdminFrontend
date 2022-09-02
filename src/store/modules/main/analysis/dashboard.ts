import { Module } from 'vuex'
import type { AnalysisStateType } from './types'
import type { IRootState } from '../../../types'

import {
  getGoodsAddressSale,
  getGoodsCategoryCount,
  getGoodsCategoryFavor,
  getGoodsCategorySale,
  getGoodsAmountList,
  getGoodsSaleTop10
} from '@/service/main/analysis/dashboard'
const analysisModule: Module<AnalysisStateType, IRootState> = {
  namespaced: true,
  state() {
    return {
      goodsAddressSale: [],
      goodsCategoryCount: [],
      goodsCategoryFavor: [],
      goodsCategorySale: [],
      goodsAmountList: [],
      goodsSaleTop10: []
    }
  },
  getters: {},
  mutations: {
    changeGoodsCategoryCount(state, list: any[]) {
      state.goodsCategoryCount = list
    },
    changeGoodsCategorySale(state, list: any[]) {
      state.goodsCategorySale = list
    },
    changeGoodsCategoryFavor(state, list: any[]) {
      state.goodsCategoryFavor = list
    },
    changeGoodsAddressSale(state, list: any[]) {
      state.goodsAddressSale = list
    },
    changeGoodsAmountList(state, list: any[]) {
      state.goodsAmountList = list
    },
    changeGoodsSaleTop10(state, list: any[]) {
      state.goodsSaleTop10 = list
    }
  },
  actions: {
    async chartDataAction(context) {
      const goodsAmountListRes = await getGoodsAmountList()
      context.commit('changeGoodsAmountList', goodsAmountListRes.data.records)

      const goodsCateCountRes = await getGoodsCategoryCount()
      context.commit('changeGoodsCategoryCount', goodsCateCountRes.data.records)

      const goodsCateSaleRes = await getGoodsCategorySale()
      context.commit('changeGoodsCategorySale', goodsCateSaleRes.data.records)

      const goodsCateFavorRes = await getGoodsCategoryFavor()
      context.commit('changeGoodsCategoryFavor', goodsCateFavorRes.data.records)

      const goodsAddressSaleRes = await getGoodsAddressSale()
      context.commit('changeGoodsAddressSale', goodsAddressSaleRes.data.records)
    },
    async goodsSaleTop10Action(context) {
      const goodsSaleTop10Res = await getGoodsSaleTop10()
      context.commit('changeGoodsSaleTop10', goodsSaleTop10Res.data.records)
    }
  },
  modules: {}
}

export default analysisModule
