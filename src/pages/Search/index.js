import React, { useEffect, useState } from 'react'
import {SearchOutlined} from '@ant-design/icons'
import Title from '../../components/title'

import './index.less'
const SearchPage = props => {
  const [searchValue,setSearchValue] = useState('')
  const [focusFlag,setFocusFlag] = useState(false)
  const handleChange = (event) => {
    let value = event.target.value.trim()
    setSearchValue(value)
  }
  const handleSearch = () => {
    //dispatch 一个action
  }

  return (
    <div className='searchContent'>
      <Title name='搜索' />
      <div className='searchBox'>
        <div className='searchBody'>
          <div className='searchDetail'>
            <SearchOutlined style={{fontSize:'20px',color:'rgb(187, 180, 180)',margin:'0 5px'}} />
            <input type='text' value={searchValue} onChange={handleChange} onFocus={()=>{setFocusFlag(true)}} onBlur={()=>{setFocusFlag(false)}} placeholder='歌手/歌名/拼音' />
          </div>
          <div className={`searchBtn ${focusFlag ? 'searchFocus':''}`} onClick={handleSearch}>搜索</div>
        </div>
      </div>
      <div className='searchResult'>

      </div>
    </div>
  )

}

export default SearchPage