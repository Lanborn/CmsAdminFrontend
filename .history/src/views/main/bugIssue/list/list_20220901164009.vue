<template>
  <div class="list">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="bug/issue"
      :usePermission="false"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'list',
  components: { PageContent },
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped lang="less">
.list {
  .vaberrage {
    height: 200px;
    width: 100%;
    .baberrage-box {
      height: 200px !important;
    }
  }
}
</style>
