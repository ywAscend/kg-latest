import { combineReducers } from 'redux'
import homeReducer from './home'
import videoRoutine from './videoPlay'

const rootReducer = combineReducers({
    homeReducer,
    videoRoutine
})

export default rootReducer