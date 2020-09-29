import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from '../../components/head'
const Home = props => {

    return (
        <div>
            <Header/>
            <div className='content'>
                { renderRoutes(props.route.routes) }
            </div>
        </div>
    )
}

export default Home