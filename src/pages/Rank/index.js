import React, { useEffect } from 'react'
import rankRoutine from '../../store/routines/rank'
import { useDispatch, useSelector } from 'react-redux'
import { RightOutlined } from '@ant-design/icons'
import { ImgUrlFiter } from '../../utils'
import './index.less'
const Rank = props => {
    const dispatch = useDispatch()
    const rankData = useSelector(state => state.rankReducer.rankList)
    useEffect(() => {
        dispatch({
            type: rankRoutine.TRIGGER
        })
    }, [])
    const handleRankClick = rankid => {
        console.log(`rankid:${rankid}`)
        console.log(props)
        //先请求接口，然后跳转详情页面
        props.history.push(`/RankDetail/${rankid}`)
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