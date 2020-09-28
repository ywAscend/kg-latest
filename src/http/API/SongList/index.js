import http from '../../http'
import { URL_ENUM } from '../../../constants/enum'

export const getSongListServerData = () => http.get(URL_ENUM.SONG_LIST_INFO)