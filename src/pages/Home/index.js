import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import { homeTrigger } from '../../store/actions/home'
import { Button, Spin } from 'antd'
import './index.less'
const Home = props => {
    const homeState = useSelector(state => state.homeReducer)
    const disptch = useDispatch()
    const { isLoading } = homeState
    const handleFetchData = () => {
        disptch(homeTrigger())
    }

    const toggleLoading = () => {
        if (!isLoading) return null
        return <div className='loading'>
            <Spin />
        </div>
    }

    const handleGoNewSong = () =>{
        console.log(props)
        props.history.push('newSong')
    }

    return (
        <div>
            <div>首页</div>
            <button onClick={handleGoNewSong}>go newSong</button>
            <div>
                <button onClick={handleFetchData} type='primary'>fetch data</button>
                {
                    toggleLoading()
                }
            </div>
        </div>
    )
}

export default Home