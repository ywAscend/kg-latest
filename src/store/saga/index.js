import { all, put, call, fork, takeLatest } from 'redux-saga/effects'
import homeRoutine from '../routines/home'
import videoRoutine from '../routines/videoPlay'
import rankRoutine from '../routines/rank'
import rankDetailRoutine from '../routines/rankDetail'
import songListRoutine from '../routines/songList'
import songListDetailRoutine from '../routines/songListDetail'
import singerRoutine from '../routines/singer'
import singerListRoutine from '../routines/singerList'
import { getNewSongServerData } from '../../http/API/NewSong'
import { getSongInfoData } from '../../http/API/SongInfo'
import { getRankServerData } from '../../http/API/RANK'
import { getRankDetailServerData } from '../../http/API/RankDetail'
import { getSongListServerData } from '../../http/API/SongList'
import { getSongListDetailServerData } from '../../http/API/SongListDetail'
import { getSingerInfoData } from '../../http/API/Singer'
import { getSingerListServerData } from '../../http/API/SingerList'

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
    yield takeLatest(videoRoutine.TRIGGER, updateVideoPlay)
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
function* getRankDetailData({ rankid, curPage, totalPage, json, goToRankDetail }) {
    try {
        yield put(rankDetailRoutine.request())
        const rankDetailData = yield call(getRankDetailServerData, { rankid, curPage, totalPage, json })
        console.log('排名详情', rankDetailData)
        yield put(rankDetailRoutine.success(rankDetailData))
        const songList = (rankDetailData.songs && rankDetailData.songs.list || '')
        yield put(videoRoutine.fulfill({ data: songList }))
        typeof goToRankDetail === 'function' && goToRankDetail(rankDetailData)
    } catch (error) {
        yield put(rankDetailRoutine.failure(error.message))
    } finally {
        yield put(rankDetailRoutine.fulfill())
    }
}

//songList
function* watchSongList() {
    yield takeLatest(songListRoutine.TRIGGER, getSongListData)
}
function* getSongListData() {
    try {
        yield put(songListRoutine.request())
        const songListData = yield call(getSongListServerData)
        console.log('歌单', songListData)
        yield put(songListRoutine.success(songListData))

    } catch (error) {
        yield put(songListRoutine.failure(error.message))
    } finally {
        yield put(songListRoutine.fulfill())
    }
}

//songListDetail
function* wathSongListDetail() {
    yield takeLatest(songListDetailRoutine.TRIGGER, getSongListDetailData)
}
function* getSongListDetailData({ specialid, goToSongListDetail }) {
    try {
        yield put(songListDetailRoutine.request())
        const songListDetailData = yield call(() => getSongListDetailServerData(specialid))
        console.log('歌单详情', songListDetailData)
        yield put(songListDetailRoutine.success(songListDetailData))
        yield put(videoRoutine.fulfill({ data: songListDetailData.list.list.info }))
        typeof goToSongListDetail === 'function' && goToSongListDetail(songListDetailData)
    } catch (error) {
        yield put(songListDetailRoutine.failure(error.message))
    } finally {
        yield put(songListDetailRoutine.fulfill())
    }
}

//singer
function* watchSinger() {
    yield takeLatest(singerRoutine.TRIGGER, getSingerDetailData)
}
function* getSingerDetailData() {
    try {
        yield put(singerRoutine.request())
        const singerInfo = yield call(getSingerInfoData)
        console.log('0000', singerInfo)
        yield put(singerRoutine.success(singerInfo))
    } catch (error) {
        yield put(singerRoutine.failure(error.message))
    } finally {
        yield put(singerRoutine.fulfill())
    }
}

// singerList
function* watchSingerList() {
    yield takeLatest(singerListRoutine.TRIGGER, getSingerListDetailData)
}
function* getSingerListDetailData({ id }) {
    try {
        yield put(singerListRoutine.request())
        const singerListData = yield call(() => getSingerListServerData(id))
        console.log('歌手列表', singerListData)
        yield put(singerListRoutine.success(singerListData))
    } catch (error) {
        yield put(singerListRoutine.failure(error.message))
    } finally {
        yield put(singerListRoutine.fulfill())
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchHome),
        fork(watchVideoPlay),
        fork(watchRank),
        fork(watchRankDetail),
        fork(watchSongList),
        fork(wathSongListDetail),
        fork(watchSinger),
        fork(watchSingerList)
    ])
}