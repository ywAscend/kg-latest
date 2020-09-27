import { all, put, call, fork, takeLatest, takeEvery } from 'redux-saga/effects'
import homeRoutine from '../routines/home'
import videoRoutine from '../routines/videoPlay'
import rankRoutine from '../routines/rank'
import rankDetailRoutine from '../routines/rankDetail'
import { getNewSongServerData } from '../../http/API/NewSong'
import { getSongInfoData } from '../../http/API/SongInfo'
import { getRankServerData } from '../../http/API/RANK'
import { getRankDetailServerData } from '../../http/API/RankDetail'

function* watchHome() {
    yield takeLatest(homeRoutine.TRIGGER, fetchNewSongServerData)
}

function* fetchNewSongServerData() {
    try {
        //触发请求
        yield put(homeRoutine.request())
        //请求服务数据
        //const respose = yield call(fetch,'/api/rank/list&json=true')
        const respose = yield call(getNewSongServerData)
        //请求成功
        yield put(videoRoutine.fulfill(respose))
        yield put(homeRoutine.success(respose))

    } catch (error) {
        //请求失败
        yield put(homeRoutine.failure(error.message))
    } finally {
        //请求完成
        yield put(homeRoutine.fulfill())
    }
}

//设置video数据
function* watchVideoPlay() {
    yield takeEvery(videoRoutine.TRIGGER, updateVideoPlay)
}

function* updateVideoPlay(action) {
    try {
        //获取传递的index,hash,调接口，更新
        const { index, hash } = action
        //调接口
        const respose = yield call(getSongInfoData, { hash })
        // console.log(respose)
        //更新数据
        yield put(videoRoutine.success({ data: respose, index }))

    } catch (error) {
        yield put(videoRoutine.failure(error.message))
    } finally {

    }
}

//rank
function* watchRank() {
    yield takeLatest(rankRoutine.TRIGGER, fethRankServerData)
}

function* fethRankServerData(action) {
    try {
        yield put(rankRoutine.request())
        const rankData = yield call(getRankServerData)
        console.log(rankData)
        yield put(rankRoutine.success(rankData))
    } catch (error) {
        yield put(rankRoutine.failure(error.message))
    } finally {
        yield put(rankRoutine.fulfill())
    }
}

//rankDetail
function* watchRankDetail() {
    yield takeLatest(rankDetailRoutine.TRIGGER, getRankDetailData)
}
function* getRankDetailData({rankid,curPage,totalPage,json,goToRankDetail}) {
    try {
        yield put(rankDetailRoutine.request())
        const rankDetailData = yield call(getRankDetailServerData,{rankid,curPage,totalPage,json})
        console.log('排名详情',rankDetailData)
        yield put(rankDetailRoutine.success(rankDetailData))
        typeof goToRankDetail === 'function' && goToRankDetail(rankDetailData)
    } catch (error) {
        yield put(rankDetailRoutine.failure(error.message))
    } finally{
        yield put(rankDetailRoutine.fulfill())
    }
   

    
}


export default function* rootSaga() {
    yield all([
        fork(watchHome),
        fork(watchVideoPlay),
        fork(watchRank),
        fork(watchRankDetail)
    ])
}