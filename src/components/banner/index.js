import React, { useEffect } from 'react'
import Swiper, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import './index.less'
Swiper.use([Pagination])

//图片容器
const Item = props => {
    return (
        <div className="swiper-slide">
            <img src={props.imgurl} alt='' />
        </div>
    )
}

const Banner = props => {
    const { data } = props
    const renderItem = () => {
        if (!data) return null
        return data.map((item, index) => {
            return <Item  {...item} key={index} />
        })
    }


    useEffect(() => {
        let swiper = new Swiper('.swiper-container', {
            autoplay:true,//自动滑动
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })

        return () => {
            swiper.destroy()
        }

    }, [])

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {renderItem()}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-scrollbar"></div>
        </div>

    )
}

export default Banner