import http from '../../http'
import { URL_ENUM } from '../../../constants/enum'

export const getHotSearchResultData = () => http.get(URL_ENUM.HOT_SEARCH_INFO)
export const getSearchResultData = (keyword,page='1') => http.get(URL_ENUM.SEARCH_INFO,{keyword,page})
