import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import songListRoutine from '../../store/routines/songList'
import songListDetailRoutine from '../../store/routines/songListDetail'
import { ImgUrlFiter } from '../../utils'
import { RightOutlined, CustomerServiceOutlined } from '@ant-design/icons'
import './index.less'

const SongList = props => {
    const [specialId, SetSpecialId] = useState('')
    const statusRef = useRef(null)
    const dispatch = useDispatch()
    const songListData = useSelector(state => state.songListReducer.songListInfo)

    useEffect(() => {
        dispatch({
            type: songListRoutine.TRIGGER
        })
    // eslint-disable-next-line
    }, [])
    useEffect(() => {
        statusRef.current = specialId
    }, [specialId])

    const goToSongListDetail = (data) => {
        if (data.info && data.list) {
            props.history.push(`/SongList/${statusRef.current}`)
        } else {
            alert('请求数据失败')
        }
    }

    const handleSongListClick = ({ specialid }) => {
        console.log(`specialid:${specialid}`)
        SetSpecialId(specialid)
        dispatch({
            type: songListDetailRoutine.TRIGGER,
            specialid,
            goToSongListDetail
        })

    }

    const renderSongList = () => {
        const songList = songListData.list && songListData.list.info || ''
        if (!songList || songList.length < 0) return null
        return songList.map((item, index) => {
            return (
                <li onClick={() => handleSongListClick(item)} key={index}>
                    <div className='detailConent'>
                        <div className='imgContent'><img src={ImgUrlFiter(item.imgurl)} alt='' /></div>
                        <div className='specialname'>
                            <p>{item.specialname}</p>
                            <p><CustomerServiceOutlined style={{ color: 'grey' }} /><span className='playcount'>{item.playcount}</span></p>
                        </div>
                    </div>
                    <div className='rightIcon'><RightOutlined style={{ fontSize: '20px', color: '#ccc' }} /></div>
                </li>
            )
        })
    }

    return (
        <div className='songList'>
            <ul className='songListContent'>
                {renderSongList()}
            </ul>
        </div>
    )
}

export default SongList