import http from '../../http'
import { URL_ENUM } from '../../../constants/enum'

export const getRankDetailServerData = (options) => http.get(URL_ENUM.RANK_DETAIL_INFO,options)