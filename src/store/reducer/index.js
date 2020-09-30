import { combineReducers } from 'redux'
import homeReducer from './home'
import videoRoutine from './videoPlay'
import rankReducer from './rank'
import rankDetailReudcer from './rankDetail'
import songListReducer from './songList'
import songListDetailReducer from './songListDetail'
import singerReducer from './singer'
import singerListReducer from './singerList'

const rootReducer = combineReducers({
    homeReducer,
    videoRoutine,
    rankReducer,
    rankDetailReudcer,
    songListReducer,
    songListDetailReducer,
    singerReducer,
    singerListReducer
})

export default rootReducer