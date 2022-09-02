import anRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return anRequest.get<IDataType>({
    url: 'cms' + url,
    params: queryInfo
  })
}

// url: /users/id
export function deletePageData(url: string, ids: []) {
  return anRequest.post<IDataType>({
    url: 'cms' + url + '/delete',
    data: ids
  })
}

export function createPageData(url: string, newData: any) {
  return anRequest.post<IDataType>({
    url: 'cms' + url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return anRequest.post<IDataType>({
    url: 'cms' + url,
    data: editData
  })
}
