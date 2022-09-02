import anRequest from '../../index'

import { IDataType } from '../../types'

interface IArticlesDataType {
  title: string
  cotent: string
}
export function publishArticlesData(articlesData: IArticlesDataType) {
  return anRequest.post<IDataType>({
    url: '/cms/bug/issue/create',
    data: articlesData
  })
}
export function getArticlesData(payload: any) {
  return anRequest.get<IDataType>({
    url: '/story/list',
    data: payload
  })
}
