import React, { useState, useEffect } from 'react'
import { withRouter, useRouteMatch } from 'react-router-dom'
import { Menu } from 'antd'
import { NAV_URL } from '../../constants/enum'
import SearchCom from '../../components/search'

const Header = props => {
    const { url } = useRouteMatch()
    const [current, setCurrent] = useState('newSong')
    const windowHref = window.location.href

    const handleUrl = urls => urls && urls.split('/')[3]

    useEffect(() => {
        if (windowHref) {
            let currentUrl = handleUrl(windowHref) || 'newSong'
            setCurrent(currentUrl)
        }
    }, [windowHref])

    const handleClick = event => {
        // props.history.push(`${props.match.url}${event.key}`)
        
        if(event.key === current) return
        if(event.key === 'newSong'){
            props.history.push('/')
            return 
        }
        props.history.push(`${url}${event.key}`)
    }

    const UpperCode = key => `${key.slice(0, 1).toUpperCase()}${key.slice(1)}`

    console.log('currentUrl', current)


    return (
        <div className='headerContent'>
            <SearchCom />
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