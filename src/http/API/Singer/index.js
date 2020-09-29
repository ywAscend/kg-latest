import http from '../../http'
import { URL_ENUM } from '../../../constants/enum'

export const getSingerInfoData = () => http.get(URL_ENUM.SINGER_INFO)