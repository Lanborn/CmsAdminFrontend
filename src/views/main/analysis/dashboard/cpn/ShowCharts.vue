<template>
  <div class="show-charts">
    <el-row :gutter="10">
      <el-col :span="7">
        <an-card title="分类商品数量(饼图)">
          <page-pic-chart :optionData="goodsCategoryCount" />
        </an-card>
      </el-col>
      <el-col :span="10">
        <an-card title="不同城市销量(中国地图)">
          <page-china-chart :optionData="goodsAddressSale" />
        </an-card>
      </el-col>
      <el-col :span="7">
        <an-card title="分类商品数量(玫瑰图)">
          <page-rose-chart :optionData="goodsCategoryCount" />
        </an-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="dashboard-row">
      <el-col :span="12">
        <an-card title="分类商品销售(折现图)">
          <page-line-chart :optionData="goodsCategorySale" />
        </an-card>
      </el-col>
      <el-col :span="12">
        <an-card title="分类商品收藏(柱状图)">
          <page-bar-chart :optionData="goodsCategoryFavor" />
        </an-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { useStore } from '@/store'
import AnCard from '@/base-ui/card'
import {
  PageBarChart,
  PagePicChart,
  PageRoseChart,
  PageLineChart,
  PageChinaChart
} from '@/components/page-echart'
export default defineComponent({
  name: 'ShowCharts',
  components: {
    AnCard,
    PagePicChart,
    PageRoseChart,
    PageLineChart,
    PageBarChart,
    PageChinaChart
  },
  setup() {
    const store = useStore()
    const goodsCategoryFavor = computed(() => {
      const valueList: string[] = []
      const keyList: number[] = []
      store.state.analysis.goodsCategoryFavor.map((item) => {
        valueList.push(item.goodsFavor)
        keyList.push(item.name)
      })
      return {
        valueList,
        keyList
      }
    })
    const goodsCategoryCount = computed(() => {
      return store.state.analysis.goodsCategoryCount.map((item) => ({
        value: item.goodsCount,
        name: item.name
      }))
    })
    const goodsCategorySale = computed(() => {
      const valueList: string[] = []
      const keyList: number[] = []
      store.state.analysis.goodsCategorySale.map((item) => {
        valueList.push(item.goodsCount)
        keyList.push(item.name)
      })
      return {
        valueList,
        keyList
      }
    })

    const goodsAddressSale = computed(() => {
      const dataList: any[] = []
      store.state.analysis.goodsAddressSale.map((item) => {
        dataList.push({
          name: item.address,
          value: item.count
        })
      })
      return {
        dataList
      }
    })
    return {
      goodsCategoryFavor,
      goodsCategoryCount,
      goodsCategorySale,
      goodsAddressSale
    }
  }
})
</script>

<style lang="less" scoped>
.dashboard-row {
  margin-top: 10px;
}
</style>
