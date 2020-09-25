import { combineReducers } from 'redux'
import homeReducer from './home'
import videoRoutine from './videoPlay'
import rankReducer from './rank'
import rankDetailReudcer from './rankDetail'

const rootReducer = combineReducers({
    homeReducer,
    videoRoutine,
    rankReducer,
    rankDetailReudcer
})

export default rootReducer