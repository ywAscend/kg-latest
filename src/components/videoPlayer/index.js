import React from 'react'
import withVideo from '../../hoc/with-video'
import { PlayCircleOutlined, PauseCircleOutlined, ForwardOutlined, DownloadOutlined } from '@ant-design/icons'
import './index.less'
const VideoPlayer = props => {
    const { handleTogglePlayMusic, NextMusic, playFlag, myRef, musicData, filter,handleDownLoadMusic } = props
    console.log('播放器组件加载了')
    return (
        <div className='musicPlayer'>
            <div className='info'>
                <div className='imgContent'><img src={filter(musicData.imgUrl)} alt='' /></div>
                <div className='infoText'>
                    <p>{musicData.songName || ''}</p>
                    <p>{musicData.singerName || ''}</p>
                </div>
            </div>
            <div className='menu'>
                <span onClick={handleTogglePlayMusic} >{playFlag ? <PauseCircleOutlined style={{ fontSize: '26px', color: '#fff' }} /> : <PlayCircleOutlined style={{ fontSize: '26px', color: '#fff' }} />}</span>
                <span onClick={NextMusic}><ForwardOutlined style={{ fontSize: '26px', color: '#fff' }} /></span>
                <span onClick={handleDownLoadMusic}><DownloadOutlined style={{ fontSize: '26px', color: '#fff' }} /></span>
                <audio id='audio' src={musicData.url} ref={myRef} autoPlay></audio>
            </div>
        </div>
    )
}

export default withVideo()(VideoPlayer) 