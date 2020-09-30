import singerListRoutine from '../../routines/singerList'

const initSingerListState = {
    isLoading: false,
    singerListName: '',
    singerListInfo: ''
}

const singerListReducer = (state = initSingerListState, action) => {
    switch (action.type) {
        case singerListRoutine.TRIGGER:
            return {
                ...state,
                isLoading:true
            }
        case singerListRoutine.SUCCESS:
            return {
                ...state,
                singerListName: action.payload.classname,
                singerListInfo: action.payload.singers
            }
        case singerListRoutine.FAILURE:
            return {
                ...state,
                singerListInfo: action.payload
            }
        case singerListRoutine.FULFILL:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}

export default singerListReducer