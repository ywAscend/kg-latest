import { all, put, call, fork, takeLatest, takeEvery } from 'redux-saga/effects'
import homeRoutine from '../routines/home'
import videoRoutine from '../routines/videoPlay'
import { getNewSongServerData } from '../../http/API/NewSong'
import { getSongInfoData } from '../../http/API/SongInfo'

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

export default function* rootSaga() {
    yield all([
        fork(watchHome),
        fork(watchVideoPlay)
    ])
}