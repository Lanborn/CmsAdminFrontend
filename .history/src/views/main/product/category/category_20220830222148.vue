<template>
  <div class="category">
    <category-header :chartsData="chartsData" />
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="category"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="category"
      :modalConfig="ModalConfig"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import CategoryHeader from './cpn/CategoryHeader.vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { ModalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'category',
  components: {
    CategoryHeader,
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    const store = useStore()
    store.dispatch('analysis/goodsSaleTop10Action')

    const chartsData = computed(() => {
      return store.state.analysis.goodsSaleTop10.map((goods) => {
        return { name: goods.name, value: goods.saleCount }
      })
    })
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal()

    return {
      contentTableConfig,
      searchFormConfig,
      ModalConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      chartsData
    }
  }
})
</script>

<style scoped lang="less">
.category {
  .page-search {
    margin: 10px 0;
  }
}
</style>
