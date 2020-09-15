import React,{useEffect} from 'react'
import { renderRoutes } from 'react-router-config'
import Header from '../../components/head'
const Home = props => {

    useEffect(() =>{
        props.history.push('/newSong')
    },[])

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