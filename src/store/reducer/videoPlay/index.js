import videoRoutine from '../../routines/videoPlay'

const initState = {
    playDatas: '', //播放总曲目
    musicIndex: 0, //当前播放歌曲索引,默认第一条
    playMusicInfo: '' //当前播放歌曲信息
}

const videoPlay = (state = initState, action) => {
    switch (action.type) {
        case videoRoutine.SUCCESS:
            return {
                ...state,
                playMusicInfo: action.payload.data,
                musicIndex: action.payload.index || 0
            }
        case videoRoutine.FAILURE:
            return {
                ...state,
                data: action.payload
            }
        case videoRoutine.FULFILL:
            return {
                ...state,
                playDatas: action.payload.data
            }
        default:
            return state
    }
}


export default videoPlay
