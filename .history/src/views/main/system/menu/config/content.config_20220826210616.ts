export const contentTableConfig = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'icon', label: '菜单图标', minWidth: '150' },
    { prop: 'url', label: '菜单路径', minWidth: '200' },
    { prop: 'type', label: '类型', minWidth: '100' },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
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
      slotName: 'updatetime'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'operation'
    }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  },
  showTabelIndex: false,
  showTabelSelect: false,
  showPagination: false
}
