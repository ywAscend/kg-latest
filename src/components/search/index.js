import React from 'react'
import { Input } from 'antd'
import './index.less'
const { Search } = Input

const SearchCom = props => {
    const handelSearch = (value) => {
        console.log(value)
        console.log(props)
    }
    return (
        <div>
            <header>
                <Search
                    placeholder="搜索你想要的..."
                    enterButton
                    size="large"
                    onSearch={value => handelSearch(value)}
                />
            </header>
        </div>
    )
}

export default SearchCom