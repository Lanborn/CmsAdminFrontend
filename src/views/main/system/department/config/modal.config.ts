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
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'parentId',
      type: 'select',
      label: '上级部门',
      placeholder: '请选择上级部门',
      options: [
        {
          title: '总裁办',
          value: 1
        },
        {
          title: '研发部',
          value: 2
        }
      ]
    },
    {
      field: 'leader',
      type: 'input',
      label: '领导名称',
      placeholder: '请输入领导名称'
    }
  ],
  colLayout: { span: 24 }
}
