import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'text',
      label: 'id',
      isHidden: true
    },
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    },
    {
      field: 'code',
      type: 'input',
      label: '角色编码',
      placeholder: '请输入角色编码'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
