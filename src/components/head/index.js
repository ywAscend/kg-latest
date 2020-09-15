import React, { useState, useEffect } from 'react'
import { withRouter, useRouteMatch } from 'react-router-dom'
import { Input, Menu } from 'antd'
import { NAV_URL } from '../../constants/enum'
import './index.less'
const { Search } = Input
const Header = props => {
    const { url } = useRouteMatch()
    const [current, setCurrent] = useState('newSong')
    const windowHref = window.location.href
    const handelSearch = (value) => {
        console.log(value)
        console.log(props)
    }

    const handleUrl = urls => urls && urls.split('/')[3]

    useEffect(() => {
        if (windowHref) {
            let currentUrl = handleUrl(windowHref) || 'newSong'
            setCurrent(currentUrl)
        }
    }, [windowHref])

    const handleClick = event => {
        // props.history.push(`${props.match.url}${event.key}`)
        // if(event.key === 'newSong'){
        //     props.history.push('/')
        //     return 
        // }
        if(event.key === current) return
        props.history.push(`${url}${event.key}`)
    }

    const UpperCode = key => `${key.slice(0, 1).toUpperCase()}${key.slice(1)}`

    console.log('currentUrl', current)


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
                    {
                        NAV_URL.map(item => <Menu.Item key={item}> {UpperCode(item)} </Menu.Item>)
                    }
                </Menu>
            </nav>
        </div>

    )
}


export default withRouter(Header)