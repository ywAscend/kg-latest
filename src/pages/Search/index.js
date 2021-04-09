import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import searchRoutine from '../../store/routines/search'
import videoRoutine from '../../store/routines/videoPlay'
import MusicList from '../../components/musicList'
import VideoPlayer from '../../components/videoPlayer'
import { SearchOutlined } from '@ant-design/icons'
import Title from '../../components/title'

import './index.less'
const SearchPage = props => {
  const dispatch = useDispatch()
  const searchDataLists = useSelector(state => state.searchReducer)
  console.log('搜索获得的数据', searchDataLists)
  const { searchValue, searchData, searchResult } = searchDataLists
  const { total } = searchData
  const [playFlag, setPlayFlag] = useState(false)

  const [searchVal, setSearchVal] = useState(searchValue)
  const [focusFlag, setFocusFlag] = useState(false)
  const [page,setPage] = useState('1')


  const handleChange = (event) => {
    let value = event.target.value.trim()
    setSearchVal(value)
  }
  const handleSearch = () => {
    if (!searchVal) return
    dispatch({
      type: searchRoutine.TRIGGER,
      searchValue: searchVal,
      page
    })
  }

  const handlePlayFlag = (index, hash) => {
    setPlayFlag(true)
    //更新歌曲信息
    dispatch({
      type: videoRoutine.TRIGGER,
      index,
      hash
    })
  }

  const handleScroll = (event) => {
    //滚动条滚动距离
    let scrollDistance = event.target.scrollTop
    //滚动条长度
    let scrollLength = event.target.scrollHeight
    //视口的高度
    let clientHeight = document.body.clientHeight
    //当前标签距离顶部的距离
    let currentOffsetTop = event.target.offsetTop
    let targetHeight = clientHeight - currentOffsetTop
    let scrolledHeight = Math.ceil(scrollDistance) + targetHeight + 1
    let totolPage = Math.ceil(Number(total)/20)
    if (scrolledHeight >= scrollLength) {
      let newPage = Number(page) +1
      if(newPage <= totolPage){
        setPage(newPage)
        handleSearch()
      } else {
        alert('没有更多了！')
      }
      
    }


  }

  const renderNum = () => {
    if (searchData !== '') {
      return (
        <div className='totolNum'>
          <span>共有{total}条数据</span>
        </div>
      )
    }
    return null
  }

  const renderList = () => {
    if (searchResult && Array.isArray(searchResult) && searchResult.length > 0) {
      return (
        <div className='resultContent'>
          <MusicList data={searchResult} handlePlayFlag={handlePlayFlag} />
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
            <SearchOutlined style={{ fontSize: '20px', color: 'rgb(187, 180, 180)', margin: '0 5px' }} />
            <input type='text' value={searchVal} onChange={handleChange} onFocus={() => { setFocusFlag(true) }} onBlur={() => { setFocusFlag(false) }} placeholder='歌手/歌名/拼音' />
          </div>
          <div className={`searchBtn ${focusFlag ? 'searchFocus' : ''}`} onClick={handleSearch}>搜索</div>
        </div>
      </div>
      <div className='searchResult' onScroll={handleScroll}>
        {renderNum()}
        {renderList()}
      </div>
      <VideoPlayer flag={playFlag} />
    </div>
  )

}

export default SearchPage