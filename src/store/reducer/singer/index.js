import singerRoutine from '../../routines/singer'

const initSingerState = {
    isLoading: false,
    singerInfo: ''
}

const singerReducer = (state = initSingerState, action) => {
    switch(action.type){
        case singerRoutine.TRIGGER:
            return{
                ...state,
                isLoading: true
            }
        case singerRoutine.SUCCESS:
            return {
                ...state,
                singerInfo: action.payload.list
            }
        case singerRoutine.FAILURE:
            return{
                ...state,
                singerInfo: action.payload
            }
        case singerRoutine.FULFILL:
            return {
                ...state,
                isLoading:false
            }
        default:
            return state
    }
}

export default singerReducer