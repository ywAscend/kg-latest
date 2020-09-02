import React from 'react'
import './index.less'
import downLoadImg from '../../assets/img/download_icon_2.png'
const MusicList = props => {
    const { data, handlePlayFlag } = props
    const renderList = () => {
        if (!data) return null
        return data.map((item, index) => {
            return (
                <li key={index} onClick={()=>handlePlayFlag(index,item.hash)}>
                    <span className='musicName'>{item.filename || ''}</span>
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