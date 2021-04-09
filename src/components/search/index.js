import React from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux'
import { withRouter } from 'react-router-dom'
import searchRoutine from '../../store/routines/search'
import { Input } from 'antd'
import './index.less'
const { Search } = Input

const SearchCom = props => {

    const dispatch = useDispatch()

    const handelSearch = (value) => {
        if(!value){
            searchCallBack(props)
            return
        }
        dispatch({
            type: searchRoutine.TRIGGER,
            searchValue: value,
            callBack:()=>{
                searchCallBack(props)
            }
        })
    }

    const searchCallBack = props => {
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