export const contentTableConfig = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '80' },
    { prop: 'oldPrice', label: '原价格', minWidth: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', minWidth: '80' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'image' },
    { prop: 'inventoryCount', label: '剩余库存', minWidth: '80' },
    { prop: 'saleCount', label: '已售', minWidth: '60' },
    { prop: 'favorCount', label: '优惠件数', minWidth: '60' },
    { prop: 'address', label: '地址', minWidth: '60' },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
    {
      prop: 'create_time',
      label: '创建时间',
      minWidth: '150',
      slotName: 'create_time'
    },
    {
      prop: 'update_time',
      label: '更新时间',
      minWidth: '150',
      slotName: 'update_time'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
