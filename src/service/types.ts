export interface IDataType<T = any> {
  msg?: string | undefined
  code: number
  data: T
}
