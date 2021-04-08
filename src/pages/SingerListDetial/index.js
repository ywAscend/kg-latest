import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
import { LeftOutlined } from '@ant-design/icons'
import singerListDetailRoutine from '../../store/routines/singerListDetail'
import { ImgUrlFiter } from '../../utils'
import './index.less'

const SingerListDetail = props => {
  const { singerId } = useParams()
  const dispatch = useDispatch()
  const { singerListDetailInfo, singerlistDetailSongs } = useSelector(state => state.singerListDetailReducer)

  useEffect(() => {
    console.log(singerListDetailInfo, singerlistDetailSongs)
    dispatch({
      type: singerListDetailRoutine.TRIGGER,
      singerId
    })
  }, [singerId])

  const handleSingerListClick = items => {
   
  }

  const renderSingerList = () => {
    if (!singerlistDetailSongs) return null
    const listInfo = _.get(singerlistDetailSongs, 'list', '')
    if (!listInfo) return null
    return listInfo.map((item, index) => {
      return <li key={index} onClick={() => handleSingerListClick(item)} >
        <div className='singerName' >{item.filename}</div>
      </li>
    })
  }

  const handleClickBack = ()=> {
    props.history.goBack()
  }

  return (
    <div className='singerList_Detail'>
      <div className='imgContent'>
        <img src={ImgUrlFiter(singerListDetailInfo.imgurl)} alt='' />
        <div className='backIcon' onClick={handleClickBack}><LeftOutlined style={{fontSize:'30px',color:'#d9d9d9'}} /></div>
        <div className='info'>
          <div className='introduce'>
            <p className='singerName'>{singerListDetailInfo.singername}</p>
            <p className='focus' >关注</p>
          </div>
        </div>
      </div>
      <div className='songListContent'>
        <div className='listDetail'>
          <ul className='lists'>
            {renderSingerList()}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default withRouter(SingerListDetail)