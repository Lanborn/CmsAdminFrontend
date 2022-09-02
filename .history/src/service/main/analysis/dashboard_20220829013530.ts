import anRequest from '../../index'
import { IDataType } from '../../types'

enum ChartsUrl {
  GOODS_CATEGORY_COUNT = '/goods/category/count',
  GOODS_CATEGORY_SALE = '/goods/category/sale',
  GOODS_CATEGORY_FAVOR = '/goods/category/favor',
  GOODS_ADDRESS_SALE = '/goods/address/sale',
  GOODS_AMOUNT_LIST = '/goods/amount/list',
  GOODS_SALE_TOP10 = '/goods/sale/top10'
}
export function getGoodsCategoryCount() {
  return anRequest.get<IDataType>({
    url: 'cms/' + ChartsUrl.GOODS_CATEGORY_COUNT'/list'
  })
}
export function getGoodsCategorySale() {
  return anRequest.get<IDataType>({
    url: 'cms/' + ChartsUrl.GOODS_CATEGORY_SALE + '/list'
  })
}
export function getGoodsCategoryFavor() {
  return anRequest.get<IDataType>({
    url: 'cms/' + ChartsUrl.GOODS_CATEGORY_FAVOR + '/list'
  })
}
export function getGoodsAddressSale() {
  return anRequest.get<IDataType>({
    url: 'cms/' + ChartsUrl.GOODS_ADDRESS_SALE + '/list'
  })
}

export function getGoodsAmountList() {
  return anRequest.get<IDataType>({
    url: ChartsUrl.GOODS_AMOUNT_LIST + '/list'
  })
}

export function getGoodsSaleTop10() {
  return anRequest.get<IDataType>({
    url: ChartsUrl.GOODS_SALE_TOP10 + '/list'
  })
}
