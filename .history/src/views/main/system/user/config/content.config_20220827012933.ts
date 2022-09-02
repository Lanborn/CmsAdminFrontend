export const contentTableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'username', label: '用户名', minWidth: '100' },
    { prop: 'realname', label: '真实姓名', minWidth: '100' },
    { prop: 'cellphone', label: '手机号码', minWidth: '100' },
    { prop: 'email', label: '邮箱', minWidth: '100' },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
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
