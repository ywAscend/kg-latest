import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'
import './index.less'
const Title = props => {
    const { name, goBack } = props
    const handleBackClick = () => {
        if (goBack && typeof goBack === 'function') {
            goBack()
            return
        }
        props.history.goBack()
    }
    return (
        <div className='title'>
            <LeftOutlined onClick={handleBackClick} style={{ fontSize: '25px', color: '#bfbfbf',marginLeft:'10px' }} />
            <p className='name'><span>{ name }</span></p>
        </div>
    )
}

Title.propTypes = {
    name: PropTypes.string.isRequired,
    goBack: PropTypes.func
}

export default withRouter(Title)