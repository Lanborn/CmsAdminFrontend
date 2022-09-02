<template>
  <div class="chat">
    <div class="header">
      <el-input style="width: 300px" v-model="title"></el-input>
      <el-button @click="publishArticlesClic">发布文章</el-button>
    </div>
    <div class="content">
      <an-editor ref="editRef"></an-editor>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import AnEditor from '@/base-ui/editor'
import { ElMessage } from 'element-plus'

import { publishArticlesData } from '@/service/main/bugIssue'
export default defineComponent({
  name: 'chat',
  components: { AnEditor },
  setup() {
    const editRef = ref<InstanceType<typeof AnEditor>>()
    const title = ref<string>()
    const publishArticlesClic = () => {
      publishArticlesData({
        title: title.value!,
        content: editRef.value!.content.html
      })
        .then(() => {
          ElMessage.success({
            message: '文章发布成功',
            type: 'success'
          })
        })
        .catch(() => {
          ElMessage.error('文章发布失败')
        })
    }
    return { editRef, publishArticlesClic, title }
  }
})
</script>

<style lang="less" scoped>
.chat {
  height: 1000px;
  display: flex;
  flex-direction: column;
  .header {
    text-align: right;
    height: 40px;
  }
  .content {
    flex: 1;
  }
}
</style>
