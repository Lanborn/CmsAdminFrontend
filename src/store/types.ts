import { ILoginState } from './modules/login/types'
import { ISystemState } from './modules/main/system/types'
import { AnalysisStateType } from './modules/main/analysis/types'

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
  analysis: AnalysisStateType
}

export type IStoreType = IRootState & IRootWithModule
