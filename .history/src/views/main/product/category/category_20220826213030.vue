<template>
  <div class="category">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="category"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'

import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  name: 'category',
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    return {
      contentTableConfig,
      searchFormConfig
    }
  }
})
</script>

<style></style>
