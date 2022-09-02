export const contentTableConfig = {
  propList: [
    { prop: 'id', label: '部门id', minWidth: '100' },
    { prop: 'name', label: '部门名称', minWidth: '100' },
    {
      prop: 'create_time',
      label: '创建时间',
      minWidth: '250',
      slotName: 'create_time'
    },
    {
      prop: 'update_time',
      label: '更新时间',
      minWidth: '250',
      slotName: 'update_time'
    },
    {
      prop: 'leader',
      label: '部门领导',
      minWidth: '120',
      slotName: 'operation'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showTabelIndex: true,
  showTabelSelect: true
}
