import rankDetailRoutine from '../../routines/rankDetail'

const initRankDetailState = {
    isLoading: false,
    rankDetailList:''
}

const rankDetailReudcer = (state = initRankDetailState, action) => {
    switch(action.type) {
        case rankDetailRoutine.TRIGGER:
            return {
                isLoading: true,
                ...state
            }
        default:
            return state
    }
}

export default rankDetailReudcer