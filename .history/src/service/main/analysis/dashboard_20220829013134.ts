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
    url: ChartsUrl.GOODS_CATEGORY_COUNT
  })
}
export function getGoodsCategorySale() {
  return anRequest.get<IDataType>({
    url: ChartsUrl.GOODS_CATEGORY_SALE
  })
}
export function getGoodsCategoryFavor() {
  return anRequest.get<IDataType>({
    url: ChartsUrl.GOODS_CATEGORY_FAVOR
  })
}
export function getGoodsAddressSale() {
  return anRequest.get<IDataType>({
    url: ChartsUrl.GOODS_ADDRESS_SALE
  })
}

export function getGoodsAmountList() {
  return anRequest.get<IDataType>({
    url: ChartsUrl.GOODS_AMOUNT_LIST + '/list'
  })
}

export function getGoodsSaleTop10() {
  return anRequest.get<IDataType>({
    url: ChartsUrl.GOODS_SALE_TOP10
  })
}
