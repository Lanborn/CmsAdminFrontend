import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '部门名称',
      type: 'input',
      placeholder: '请输入部门名称...'
    },
    {
      field: 'create_time',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    },
    {
      field: 'leader',
      label: '部门管理',
      type: 'input',
      placeholder: '请输入部门管理人..'
    }
  ],
  labelWidth: '120px',
  itemStyle: {
    padding: '10px 40px'
  }
}
