export const contentTableConfig = {
  title: '角色列表',
  propList: [
    { prop: 'name', label: '角色名', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '100' },
    { prop: 'code', label: '角色编码', minWidth: '100' },
    {
      prop: 'create_time',
      label: '创建时间',
      minWidth: '200',
      slotName: 'create_time'
    },
    {
      prop: 'update_time',
      label: '更新时间',
      minWidth: '200',
      slotName: 'update_time'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
