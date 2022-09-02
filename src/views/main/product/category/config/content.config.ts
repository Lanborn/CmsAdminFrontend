export const contentTableConfig = {
  title: '类别列表',
  propList: [
    { prop: 'id', label: 'id', minWidth: '100' },
    { prop: 'name', label: '类别', minWidth: '100' },
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
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
