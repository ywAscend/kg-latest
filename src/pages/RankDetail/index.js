import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { LeftOutlined } from '@ant-design/icons'
import SearchCom from '../../components/search'
import { ImgUrlFiter } from '../../utils'
import './index.less'
const banner7url = "http://imge.kugou.com/mcommon/{size}/20190906/20190906162522894877.jpg"
const RankDetail = props => {
    const rankDetailData = useSelector(state => state.rankDetailReudcer.rankDetailInfo)
    const { info, songs } = rankDetailData
    const updateTime = () => songs && songs.list[0].addtime.slice(0, 10) || ''
    useEffect(() => {
        console.log('inof', info)
        console.log('songs', songs)
    }, [])
    return (
        <div className='rankDetail'>
            <SearchCom />
            <div className='rankDetailContent'>
                <div className='navHead'>
                    <LeftOutlined onClick={() => props.history.goBack()} style={{ fontSize: '25px', color: '#eee' }} />
                    <p className='rankName'>{'酷狗飙升榜'}</p>
                </div>
                <div className='detailContent'>
                    <img src={ImgUrlFiter(banner7url)} />
                    <p>上次更新时间：{updateTime() || '2020-9-27'}</p>
                </div>
                <div className='listContent'>
                    
                </div>
            </div>
        </div>
    )
}

export default RankDetail