import http from '../../http'
import { URL_ENUM } from '../../../constants/enum'

export const getSongListDetailServerData = (specialId) => http.get(`${URL_ENUM.SONG_LSIT_DETAIL_INFO}/${specialId}?json=true`)