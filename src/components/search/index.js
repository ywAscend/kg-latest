import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Input } from 'antd'
import './index.less'
const { Search } = Input

const SearchCom = props => {
    const handelSearch = (value) => {
        console.log(value)
        console.log(props)
        const {onSearch} = props
        if (onSearch && typeof onSearch === 'function') {
            onSearch()
            return
        }
        props.history.push('/Search')
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

SearchCom.propTypes = {
    onSearch: PropTypes.func
}

export default withRouter(SearchCom)