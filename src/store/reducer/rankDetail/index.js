import rankDetailRoutine from '../../routines/rankDetail'

const initRankDetailState = {
    isLoading: false,
    rankDetailInfo:''
}

const rankDetailReudcer = (state = initRankDetailState, action) => {
    switch(action.type) {
        case rankDetailRoutine.TRIGGER:
            return {
                ...state,
                isLoading: true
            }
        case rankDetailRoutine.SUCCESS:
        case rankDetailRoutine.FAILURE:
            return {
                ...state,
                rankDetailInfo: action.payload
            }
        case rankDetailRoutine.FULFILL:
            return {
                ...state,
                isLoading:false
            }
        default:
            return state
    }
}

export default rankDetailReudcer