import React, { useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { ImgUrlFiter} from '../../utils'
import singerListRoutine from '../../store/routines/singerList'
import SearchCom from '../../components/search'
import Title from '../../components/title'
import './index.less'

const SingerList = props => {
    const { id } = useParams()
    const singerlistname = _.get(props.location.state,'classname','')
    const dispatch = useDispatch()
    const singerListData = useSelector(state => state.singerListReducer)
    const { singerListName, singerListInfo } = singerListData
    useEffect(() => {
        dispatch({
            type: singerListRoutine.TRIGGER,
            id
        })
    }, [id])

    const handleSingerListClick = ({singerid}) => {
        console.log('singerid',singerid)
    }

    const renderSingerList = () => {
        if (!singerListInfo) return null
        const listInfo = _.get(singerListInfo.list, 'info', '')
        if (!listInfo || listInfo.length < 0) return null
        return listInfo.map((item, index) => {
            return <li key={index} onClick={()=>handleSingerListClick(item)} >
                <div className='imgContent'><img src={ ImgUrlFiter(item.imgurl)}/></div>
                <div className='singerName' >{item.singername}</div>
            </li>
        })

    }

    return (
        <div className='singerList'>
            <SearchCom />
            <div className='singerListConent'>
                <Title name={singerListName ||singerlistname} />
                <div className='singerListDetail'>
                    <ul className='listDetail'>
                        {renderSingerList()}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SingerList