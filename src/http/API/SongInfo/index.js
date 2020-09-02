import http from '../../http'
import { URL_ENUM } from '../../../constants/enum'

export const getSongInfoData = (options) => http.get(URL_ENUM.SONG_INFO,options)