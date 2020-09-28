import { combineReducers } from 'redux'
import homeReducer from './home'
import videoRoutine from './videoPlay'
import rankReducer from './rank'
import rankDetailReudcer from './rankDetail'
import songListReducer from './songList'
import songListDetailReducer from './songListDetail'

const rootReducer = combineReducers({
    homeReducer,
    videoRoutine,
    rankReducer,
    rankDetailReudcer,
    songListReducer,
    songListDetailReducer
})

export default rootReducer