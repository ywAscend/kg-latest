import http from '../../http'
import { URL_ENUM } from '../../../constants/enum'

export const getRankServerData = (options) => http.get(URL_ENUM.RANK_INFO)