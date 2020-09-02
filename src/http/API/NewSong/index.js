import http from '../../http'
import { URL_ENUM } from '../../../constants/enum'

export const getNewSongServerData = (options) => http.get(URL_ENUM.NEW_SONG)