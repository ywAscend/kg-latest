import http from '../../http'
import { URL_ENUM } from '../../../constants/enum'

export const getSingerListServerData = (id) => http.get(`${URL_ENUM.SINGER_LIST_INFO}/${id}?json=true`)