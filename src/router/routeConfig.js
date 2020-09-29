import Login from '../pages/Login'
import NotFound from '../components/not-found/NotFound'
import Home from '../pages/Home'
import NewSong from '../pages/NewSong'
import Rank from '../pages/Rank'
import SongList from '../pages/SongList'
import Singer from '../pages/Singer'
import RankDetail from '../pages/RankDetail' 
import SongListDetail from '../pages/SongListDetail'

//路由配置
const routeConfig = [
    {
        //404
        path: '/404',
        exact: true,
        component: NotFound
    },
    {
        path: '/Login',
        exact: true,
        component: Login
    },
    {
        path: '/RankDetail/:id',
        exact: true,
        component: RankDetail
    },
    {
        path:'/SongList/:id',
        exact: true,
        component: SongListDetail
    },
    {
        //顶级路由
        path: '/',
        component: Home,
        routes: [
            //一级路由
            {
                path: '/',
                exact: true,
                component: NewSong
            },
            {
                path: '/rank',
                exact: true,
                component: Rank
            },
            {
                path: '/songList',
                exact: true,
                component: SongList
            },
            {
                path: '/singer',
                exact: true,
                component: Singer
            },
        ]
    }
]


export default routeConfig