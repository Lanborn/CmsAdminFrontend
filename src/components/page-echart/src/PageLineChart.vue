<template>
  <div class="page-line-chart">
    <an-echarts :options="option" :zoom="1.176471"></an-echarts>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import AnEcharts from '@/base-ui/echarts'

export default defineComponent({
  name: 'PageLineChart',
  props: {
    optionData: {
      type: Object,
      default: () => ({})
    }
  },
  components: { AnEcharts },
  setup(props) {
    var option = computed(() => {
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {},
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: props.optionData.keyList
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '分别销量',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: props.optionData.valueList
          }
        ]
      }
    })
    return { option }
  }
})
</script>

<style lang="less" scoped></style>
