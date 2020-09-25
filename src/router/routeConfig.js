import Login from '../pages/Login'
import NotFound from '../components/not-found/NotFound'
import Home from '../pages/Home'
import NewSong from '../pages/NewSong'
import Rank from '../pages/Rank'
import SongList from '../pages/SongList'
import Songer from '../pages/Songer'
import RankDetail from '../pages/RankDetail'

//路由配置
const routeConfig = [
    {
        //404
        path: '/404',
        extct: true,
        component: NotFound
    },
    {
        path: '/Login',
        extct: true,
        component: Login
    },
    {
        path: '/RankDetail/:id',
        exact: true,
        component: RankDetail
    },
    {
        //顶级路由
        path: '/',
        extct: true,
        component: Home,
        routes: [
            //一级路由
            {
                path: '/newSong',
                extct: true,
                component: NewSong
            },
            {
                path: '/rank',
                extct: true,
                component: Rank
            },
            {
                path: '/songList',
                extct: true,
                component: SongList
            },
            {
                path: '/songer',
                extct: true,
                component: Songer
            },
        ]
    }
]


export default routeConfig