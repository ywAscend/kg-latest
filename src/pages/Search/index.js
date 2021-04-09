import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import searchRoutine from '../../store/routines/search'
import videoRoutine from '../../store/routines/videoPlay'
import MusicList from '../../components/musicList'
// import VideoPlayer from '../../components/videoPlayer'
import {SearchOutlined} from '@ant-design/icons'
import Title from '../../components/title'

import './index.less'
const SearchPage = props => {
  const dispatch = useDispatch()
  const searchDataLists = useSelector(state => state.searchReducer)
  console.log('搜索获得的数据',searchDataLists)
  const {searchValue,searchData,searchResult} = searchDataLists
  const [playFlag, setPlayFlag] = useState(false)

  const [searchVal,setSearchVal] = useState(searchValue)
  const [focusFlag,setFocusFlag] = useState(false)
  

  const handleChange = (event) => {
    let value = event.target.value.trim()
    setSearchVal(value)
  }
  const handleSearch = () => {
    if(!searchVal) return
    dispatch({
      type: searchRoutine.TRIGGER,
      searchValue: searchVal
    })
  }

  const handlePlayFlag = (index,hash) =>{
    setPlayFlag(true)
    //更新歌曲信息
    dispatch({
        type: videoRoutine.TRIGGER,
        index,
        hash
    })
}

  const renderNum = () => {
    if(searchData !== ''){
      return (
        <div className='totolNum'>
            <span>共有{searchData.total}条数据</span>
          </div>
      )
    } 
    return null
  }

  const renderList = () => {
    if(searchResult && Array.isArray(searchResult)&&searchResult.length>0){
      return(
        <div className='resultContent'>
            <MusicList data={searchResult} handlePlayFlag = {handlePlayFlag} />
        </div>
      )
    }
    return null
  }

  return (
    <div className='searchContent'>
      <Title name='搜索' />
      <div className='searchBox'>
        <div className='searchBody'>
          <div className='searchDetail'>
            <SearchOutlined style={{fontSize:'20px',color:'rgb(187, 180, 180)',margin:'0 5px'}} />
            <input type='text' value={searchVal} onChange={handleChange} onFocus={()=>{setFocusFlag(true)}} onBlur={()=>{setFocusFlag(false)}} placeholder='歌手/歌名/拼音' />
          </div>
          <div className={`searchBtn ${focusFlag ? 'searchFocus':''}`} onClick={handleSearch}>搜索</div>
        </div>
      </div>
      <div className='searchResult'>
        {renderNum()}
        {renderList()}
      </div>
    </div>
  )

}

export default SearchPage