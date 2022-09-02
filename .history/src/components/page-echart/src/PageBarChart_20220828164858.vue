<template>
  <div class="page-bar-chart">
    <an-echarts :options="option" :zoom="1.176471"></an-echarts>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import AnEcharts from '@/base-ui/echarts'

export default defineComponent({
  name: 'PageBarChart',
  props: {
    optionData: {
      type: Object,
      default: () => ({})
    }
  },
  components: { AnEcharts },
  setup(props) {
    var option = computed(() => ({
      tooltip: {
        trigger: 'item'
      },
      xAxis: {
        type: 'category',
        data: props.optionData.keyList
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: props.optionData.valueList,
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    }))
    return { option }
  }
})
</script>

<style lang="less" scoped></style>
