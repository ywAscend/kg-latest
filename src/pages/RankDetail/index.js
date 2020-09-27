import React, {useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { LeftOutlined } from '@ant-design/icons'
import SearchCom from '../../components/search'
import MusicList from '../../components/musicList'
import VideoPlayer from '../../components/videoPlayer'
import videoRoutine from '../../store/routines/videoPlay'
import { ImgUrlFiter } from '../../utils'
import './index.less'

const RankDetail = props => {
    const dispatch = useDispatch()
    const [playFlag, setPlayFlag] = useState(false)
    const rankDetailData = useSelector(state => state.rankDetailReudcer.rankDetailInfo)
    const { info, songs } = rankDetailData
    const updateTime = () => songs && songs.list[0].addtime.slice(0, 10) || ''

    const handlePlayFlag = (index,hash) => {
      setPlayFlag(true)
        //更新歌曲信息
        dispatch({
            type: videoRoutine.TRIGGER,
            index,
            hash
        })
    }

    return (
        <div className='rankDetail'>
            <SearchCom />
            <div className='rankDetailContent'>
                <div className='navHead'>
                    <LeftOutlined onClick={() => props.history.goBack()} style={{ fontSize: '25px', color: '#eee' }} />
                    <p className='rankName'>{ info.rankname || '酷狗飙升榜'}</p>
                </div>
                <div className='detailContent'>
                    <img src={ImgUrlFiter(info.banner7url)} />
                    <p>上次更新时间：{updateTime()}</p>
                </div>
                <div className='listContent'>
                    <MusicList data={songs.list} handlePlayFlag = {handlePlayFlag} type={'rankDetail'} />
                </div>
                <VideoPlayer flag={playFlag} />
            </div>
        </div>
    )
}

export default RankDetail