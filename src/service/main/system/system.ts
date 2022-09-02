import anRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return anRequest.get<IDataType>({
    url: 'cms' + url,
    params: queryInfo
  })
}

// url: /users/id
export function deletePageData(url: string, id: []) {
  return anRequest.post<IDataType>({
    url: 'cms' + url + '/delete',
    data: [id]
  })
}

export function deleteMenuData(url: string, id: []) {
  return anRequest.post<IDataType>({
    url: 'cms' + url + '/delete',
    data: id
  })
}

export function createPageData(url: string, newData: any) {
  return anRequest.post<IDataType>({
    url: 'cms' + url + '/create',
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return anRequest.post<IDataType>({
    url: 'cms' + url + '/update',
    data: editData
  })
}
