<template>
  <div class="category"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'category',
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    return {
      contentTableConfig,
      searchFormConfig
    }
  }
})
</script>

<style></style>
