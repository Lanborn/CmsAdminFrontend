<template>
  <div class="page-content">
    <an-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <!-- <el-button
          type="success"
          plain
          v-if="isDelete && multipleChoiceData.length > 1"
          @click="deleteMultipleChoice"
        >
          删除多条
        </el-button> -->
        <el-button
          v-if="isCreate"
          type="primary"
          size="medium"
          @click="handleNewClick"
        >
          新建数据
        </el-button>
      </template>

      <template #status="scope">
        <el-button
          plain
          size="mini"
          :type="scope.row.enable ? 'danger' : 'success'"
        >
          {{ scope.row.enable ? '禁用' : '启用' }}
        </el-button>
      </template>
      <template #create_time="scope">
        <span>{{ $filters.formatTime(scope.row.create_time) }}</span>
      </template>
      <template #update_time="scope">
        <span>{{ $filters.formatTime(scope.row.update_time) }}</span>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            v-if="isUpdate"
            icon="el-icon-edit"
            size="mini"
            type="text"
            @click="handleEditClick(scope.row)"
          >
            编辑
          </el-button>
          <el-button
            v-if="isDelete"
            icon="el-icon-delete"
            size="mini"
            type="text"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>

      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </an-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
import { usePermission } from '@/hooks/use-permission'

import AnTable from '@/base-ui/table'

export default defineComponent({
  components: {
    AnTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      required: true
    },
    usePermission: {
      type: Boolean,
      default: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore()

    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')

    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery && props.usePermission) return
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          current: pageInfo.value.currentPage,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )

    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false
        if (item.slotName === 'create_time') return false
        if (item.slotName === 'update_time') return false
        if (item.slotName === 'handler') return false
        return true
      }
    )

    const handleDeleteClick = (item: any) => {
      console.log(item)
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }
    const handleNewClick = () => {
      emit('newBtnClick')
    }
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }

    const multipleChoiceData = ref<any[]>([])
    const receiveMultipleChoice = (value: any[]) => {
      multipleChoiceData.value = value
    }
    const deleteMultipleChoice = () => {
      for (const data of multipleChoiceData.value!) {
        handleDeleteClick(data)
      }
    }

    return {
      dataList,
      getPageData,
      dataCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      handleDeleteClick,
      handleNewClick,
      handleEditClick,
      receiveMultipleChoice,
      deleteMultipleChoice
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 15px solid #f5f5f5;
}
</style>
