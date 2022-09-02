import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ANRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface ANRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ANRequestInterceptors<T>
  showLoading?: boolean
}
