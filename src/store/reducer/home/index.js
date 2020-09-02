import homeRoutine from '../../routines/home'

const initState = {
    isLoading: false,
    data: '', //歌曲总信息
    banner:'',
    musicIndex: 0, //当前播放歌曲索引,默认第一条
    
}

const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case homeRoutine.TRIGGER:
            return {
                ...state,
                isLoading: true
            }
        case homeRoutine.SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                banner:action.payload.banner
            }
        case homeRoutine.FAILURE:
            return {
                ...state,
                data: action.payload
            }
        case homeRoutine.FULFILL:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}

export default homeReducer