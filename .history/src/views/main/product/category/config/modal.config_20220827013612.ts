import { IForm } from '@/base-ui/form'

export const ModalConfig: IForm = {
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
      label: '类别名称',
      placeholder: '请输入类别名称'
    }
  ],
  colLayout: { span: 24 }
}
