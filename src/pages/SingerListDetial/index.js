import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import singerListDetailRoutine from '../../store/routines/singerListDetail'
import { ImgUrlFiter } from '../../utils'
import './index.less'

const SingerListDetail = props => {
  const { singerId } = useParams()
  const dispatch = useDispatch()
  const {singerListDetailInfo,singerlistDetailSongs} = useSelector(state => state.singerListDetailReducer)

  useEffect(() => {
    console.log(singerListDetailInfo,singerlistDetailSongs)
    dispatch({
      type: singerListDetailRoutine.TRIGGER,
      singerId
    })
  }, [singerId])


  return (
    <div className='singerListDetail'>
      <div className='imgContent'>
        <img src={ImgUrlFiter(singerListDetailInfo.imgurl)} alt='' />
      </div>
      <div className='info'>
        
      </div>
     
    </div>
  )
}

export default SingerListDetail