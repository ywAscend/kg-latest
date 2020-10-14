import http from '../../http'
import { URL_ENUM } from '../../../constants/enum'

export const getSingerListDetailServerData = (id) => http.get(`${URL_ENUM.SINGER_LIST_DETAIL_INGO}/${id}?json=true`)