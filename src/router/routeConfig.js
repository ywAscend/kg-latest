import Login from '../pages/Login'
import NotFound from '../components/not-found/NotFound'
import Home from '../pages/Home'
import NewSong from '../pages/NewSong'
import Rank from '../pages/Rank'
import SongList from '../pages/SongList'
import Singer from '../pages/Singer'
import RankDetail from '../pages/RankDetail' 
import SongListDetail from '../pages/SongListDetail'
import SingerList from '../pages/SingerList'
import SingerListDetail from '../pages/SingerListDetial'
import SearchPage from '../pages/Search'

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
        path: '/RankDetail/:rankid',
        exact: true,
        component: RankDetail
    },
    {
        path:'/SongList/:specialId',
        exact: true,
        component: SongListDetail
    },
    {
        path:'/SingerList/:classid',
        exact: true,
        component: SingerList
    },
    {
        path: '/SingerListDetail/:singerId',
        exact:true,
        component: SingerListDetail
    },
    {
        path:'/Search',
        exact:true,
        component: SearchPage
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