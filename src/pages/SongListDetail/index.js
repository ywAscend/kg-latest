import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import videoRoutine from '../../store/routines/videoPlay'
import { ImgUrlFiter } from '../../utils'
import SearchCom from '../../components/search'
import MusicList from '../../components/musicList'
import VideoPlayer from '../../components/videoPlayer'
import { LeftOutlined, DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons'
import './index.less'

// const imgurl = 'http://c1.kgimg.com/custom/{size}/20200923/20200923204047361716.jpg'
// const intro = '走进古代历史人物的世界，去聆听他们的故事，去感受他们的态度和情感。 他们的风采惊艳了时光，古代历史人物的传奇事件，你又知多少？且听！ 出镜：竹大宝Chiki 摄影：阿喵_帅不过三秒 （封面已授权）'

const SongListDetail = props => {
    const dispatch = useDispatch()
    const [arrowFlag, setArrowFlag] = useState(false)
    const [playFlag, setPlayFlag] = useState(false)
    const songListDetailData = useSelector(state => state.songListDetailReducer.songListDetail)
    const { info, list } = songListDetailData

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
        <div className='songListDetail'>
            <SearchCom />
            <div className='detialContent'>
                <div className='navHead'>
                    <LeftOutlined onClick={() => props.history.goBack()} style={{ fontSize: '25px', color: '#eee' }} />
                    <p className='specialName'>{info.list.specialname}</p>
                </div>
                <div className='detailContent'>
                    <img src={ImgUrlFiter(info.list.imgurl)} />
                </div>
                <div className='listContent'>
                    <div className={`acticleCommon ${arrowFlag ? 'upacticleContent' : 'acticleContent'}`}>
                        <p>{info.list.intro}</p>
                        <div onClick={() => setArrowFlag(flag => !flag)}>
                            {arrowFlag ? <UpCircleOutlined style={{ fontSize: '28px', color: '#ccc' }} /> : <DownCircleOutlined style={{ fontSize: '28px', color: '#ccc' }} />}
                        </div>
                    </div>
                    <MusicList data={list.list.info} handlePlayFlag={handlePlayFlag} />
                </div>
                <VideoPlayer flag={playFlag} />
            </div>
        </div>
    )
}

export default SongListDetail