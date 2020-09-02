import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import homeRoutine from '../../store/routines/home'
import videoRoutine from '../../store/routines/videoPlay'

import Banner from '../../components/banner'
import MusicList from '../../components/musicList'
import VideoPlayer from '../../components/videoPlayer'
const NewSong = props => {
    const [playFlag, setPlayFlag] = useState(false)
    const dispatch = useDispatch()
    const data = useSelector(state => state.homeReducer.data)
    const bannerData = useSelector(state => state.homeReducer.banner)
   
    const handlePlayFlag = (index,hash) =>{
        setPlayFlag(true)
        //更新歌曲信息
        dispatch({
            type: videoRoutine.TRIGGER,
            index,
            hash
        })
    }

    useEffect(() => {
        dispatch({
            type: homeRoutine.TRIGGER
        })
    }, [])

    

    return (
        <div style={{ backgroundColor: '#fff' }}>
            <Banner data={bannerData} />
            <MusicList data={data} handlePlayFlag = {handlePlayFlag} />
            <VideoPlayer flag={playFlag} />
        </div>
    )
}

export default NewSong