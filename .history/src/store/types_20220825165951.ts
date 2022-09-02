import { ILoginState } from './modules/login/types'
import { ISystemState } from './modules/main/system/types'
// import { IDashboardState } from './main/analysis/types'

export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  // dashboard: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule
