import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import rankRoutine from '../../store/routines/rank'
import rankDetailRoutine from '../../store/routines/rankDetail'
import { RightOutlined } from '@ant-design/icons'
import { ImgUrlFiter } from '../../utils'
import './index.less'
const Rank = props => {
    const [rankid,setRankid] = useState('')
    const dispatch = useDispatch()
    const rankData = useSelector(state => state.rankReducer.rankList)
    useEffect(() => {
        dispatch({
            type: rankRoutine.TRIGGER
        })
    // eslint-disable-next-line
    }, [])
    
    const goToRankDetail = (data) => {
        if( data.info && data.songs) {
            props.history.push(`/RankDetail/${rankid}`)
        } else {
            alert('请求数据失败')
        }
    }

    const handleRankClick = (rankId) => {
        console.log(`rankid:${rankId}`)
        setRankid(rankId)
        dispatch({
            type: rankDetailRoutine.TRIGGER,
            rankid,
            curPage:1,
            totalPage:2,
            json:true,
            goToRankDetail
        })
    }
    const renderList = () => {
        const { list } = rankData
        if (!list || list.length < 0) return null
        return list.map((item, index) => {
            return (
                <li onClick={()=>handleRankClick(item.rankid)} key={index}>
                    <div className='detailBox'>
                        <div className='imgContent'><img src={ImgUrlFiter(item.banner7url)} /></div>
                        <div className='rankName'>{item.rankname}</div>
                    </div>
                    <div className='rightIcon'><RightOutlined style={{fontSize:'20px',color:'#ccc'}} /></div>
                </li>
            )
        })
    }
    return (
        <div className='rank'>
            <ul>
                {renderList()}
            </ul>
        </div>
    )
}

export default Rank