import React from 'react'
import Loadable from 'react-loadable'

//路由配置
export const routeConfigs = [
    {
        //顶级路由
        path: '/',
        component: Loadable({
            loader: () => import('../pages/Home'),
        }),
        routes: [
            //一级路由
            {
                path: '/new',
                component: Loadable({
                    loader: () => import('../pages/NewSong'),
                    name: '新歌'
                })
            },
            {
                path: '/rank',
                component: Loadable({
                    loader: () => import('../pages/NewSong'),
                    name: '排名'
                })

            }
        ]
    },
    {
        //404
        path: '/404',
        component: Loadable({
            loader: () => import('../components/not-found/NotFound')
        })
    }
]