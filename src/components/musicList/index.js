import React from 'react'
import './index.less'
import downLoadImg from '../../assets/img/download_icon_2.png'
const MusicList = props => {
  const { data, handlePlayFlag, type } = props
  const renderList = () => {
    if (!data) return null
    return data.map((item, index) => {
      return (
        <li key={index} onClick={() => handlePlayFlag(index, item.hash)}>
          <span>
            {type && type === 'rankDetail' && <span className={`type_rankDetail type_rankDetail${index}`}>{index + 1}</span>}
            <span className='musicName'>{item.filename || ''}</span>
          </span>
          <span><img src={downLoadImg} alt='' /></span>
        </li>
      )

    })

  }
  return (
    <div className="listContent">
      <ul className='listContainer'>
        {renderList()}
      </ul>
    </div>
  )
}

export default MusicList