<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { contentTableConfig } from './config/content.config'
import { ModalConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/use-page-modal'
import { mapFirstMenuList } from '@/utils/map-menus'

export default defineComponent({
  name: 'an-menu',
  components: {
    PageContent,
    PageModal
  },
  setup() {
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal()

    const menuDialogConfig = computed(() => {
      const store = useStore()
      const menuList = mapFirstMenuList(store.state.entireMenu)
      const parentSection = ModalConfig.formItems.find((item) => {
        return item.field === 'parentId'
      })
      parentSection!.options = menuList
      return ModalConfig
    })

    return {
      contentTableConfig,
      ModalConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData
    }
  }
})
</script>

<style scoped></style>
