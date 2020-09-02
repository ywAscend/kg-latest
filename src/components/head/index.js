import React, { useState,useEffect } from 'react'
import { withRouter,useRouteMatch } from 'react-router-dom'
import { Input, Menu } from 'antd'
import './index.less'
const { Search } = Input
const Header = props => {
    const {url} = useRouteMatch()
    const [current, setCurrent] = useState('newSong')
    const windowHref = window.location.href
    const handelSearch = (value) => {
        console.log(value)
        console.log(props)
    }

    const handleUrl = url => url && url.split('/')[3]
   
    useEffect(()=>{
        if(windowHref){
            let currentUrl = handleUrl(windowHref) || 'newSong'
            setCurrent(currentUrl)
        }
    },[windowHref])

    const handleClick = event => {
        // props.history.push(`${props.match.url}${event.key}`)
        if(event.key === 'newSong'){
            props.history.push('/')
            return 
        }
        props.history.push(`${url}${event.key}`)
    }
    
    console.log('currentUrl',current)

    return (
        <div className='headerContent'>
            <header>
                <Search
                    placeholder="搜索你想要的..."
                    enterButton
                    size="large"
                    onSearch={value => handelSearch(value)}
                />
            </header>
            <nav>
                <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="newSong" >
                        NewSong
                    </Menu.Item>
                    <Menu.Item key="rank" >
                        Rank
                    </Menu.Item>
                    <Menu.Item key="songList" >
                        SongList
                    </Menu.Item>
                    <Menu.Item key="songer" >
                        Songer
                    </Menu.Item>
                </Menu>
            </nav>
        </div>

    )
}


export default withRouter(Header)