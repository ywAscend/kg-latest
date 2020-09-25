import React from 'react'
import { Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'
import ParticlesBg  from 'particles-bg'
const Login  = props => {
    const isLogin = useSelector(state => state.common)
    if(isLogin) return <Redirect to ='/newSong' />
    
    return (
        <div className='layout'>
            <div>登陆</div>
            <ParticlesBg type="lines" />
        </div>
    )
}

export default Login