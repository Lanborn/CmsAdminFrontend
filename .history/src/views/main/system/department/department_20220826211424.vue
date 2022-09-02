<template>
  <div class="department">
    <page-content :contentTableConfig="contentTableConfig"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'department',
  components: {
    PageContent
  },
  setup() {
    return {
      PageContent,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
