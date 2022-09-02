import anRequest from '../index'
import { IAccount, IDataType, ILoginResult, IUserMenu } from './type'

enum LoginApi {
  ACCOUNT_LOGIN = '/login',
  // USER_INFO = '/users/',
  USER_INFO = '/cms/userInfo',
  // USER_MENUS = '/role/', // 用法： role/1/menu
  LOGIN_CODE = '/captcha',
  USER_MENUS = '/cms/menu/nav'
}

export function accountLoginRequest(account: IAccount) {
  return anRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.ACCOUNT_LOGIN,
    params: account
  })
}

export function getCaptcha() {
  return anRequest.get<IDataType>({
    url: LoginApi.LOGIN_CODE
  })
}

export function requestUserInfoById() {
  return anRequest.get<IDataType<any>>({
    url: LoginApi.USER_INFO
  })
}

export function requestUserMenusByRoleId() {
  return anRequest.get<IDataType<IUserMenu>>({
    url: LoginApi.USER_MENUS
  })
}
