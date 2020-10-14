import singerListDetailRoutine from '../../routines/singerListDetail'

const initSingerListDetailState = {
  isLoading: false,
  singerListDetailData:'',
  singerListDetailInfo: '',
  singerlistDetailSongs:''
}

const singerListDetailReducer = (state = initSingerListDetailState,action) => {
  switch(action.type){
    case singerListDetailRoutine.TRIGGER:
      return {
        ...state,
        isLoading: true
      }
    case singerListDetailRoutine.SUCCESS:
      return {
        ...state,
        singerListDetailInfo: action.payload.info,
        singerlistDetailSongs: action.payload.songs,
        singerListDetailData: action.payload
      }
    case singerListDetailRoutine.FAILURE:
      return {
        ...state,
        singerListDetailData: action.payload
      }
    case singerListDetailRoutine.FULFILL:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}

export default singerListDetailReducer