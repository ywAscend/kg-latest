import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import singerRoutine from '../../store/routines/singer'
import { SortSinger } from '../../utils'
import { RightOutlined } from '@ant-design/icons'
import './index.less'

const Singer = props => {
    const dispatch = useDispatch()
    const singerData = useSelector(state => state.singerReducer)
    const singerList = SortSinger(singerData.singerInfo)
    const handleSingerClick = ({classid,classname}) => {
        console.log(classid,classname)
        props.history.push(`/SingerList/${classid}`,{classname} )
    }

    useEffect(() => {
        dispatch({
            type: singerRoutine.TRIGGER
        })
        // eslint-disable-next-line
    }, [])

    const renderSinger = () => {
        if (!singerList || singerList.length < 0) return null
        return singerList.map((item, index) => {
            return <ul key={index}>
                {
                    item.map(items => {
                        return (
                            <li key={items.classid} onClick={() => handleSingerClick(items)}>
                                <span>{items.classname}</span>
                                <span><RightOutlined style={{ fontSize: '20px', color: '#ccc' }} /></span>
                            </li>
                        )
                    })
                }
            </ul>
        })
    }
    
    return (
        <div className='singer'>
            {renderSinger()}
        </div>
    )
}

export default Singer