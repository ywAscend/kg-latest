export const NAV_URL = ['newSong', 'rank', 'songList', 'singer']
export const KG_API_URL = 'http://m.kugou.com'
export const KG_DEV_APP_URL= '/api'
export const URL_ENUM = {
    NEW_SONG: '/?json=true', //新歌列表
    //NEW_SONG: '/newSong' //新歌列表--server.js提供数据
    SONG_INFO: '/app/i/getSongInfo.php?cmd=playInfo',  //歌曲信息
    RANK_INFO: '/rank/list&json=true', //排名
    RANK_DETAIL_INFO: '/rank/info', //排名详情
    SONG_LIST_INFO: '/plist/index&json=true', //歌单
    SONG_LSIT_DETAIL_INFO: '/plist/list',//歌单详情
    SINGER_INFO: '/singer/class&json=true', //歌手
    SINGER_LIST_INFO: '/singer/list', //歌手列表
    SINGER_LIST_DETAIL_INGO: '/singer/info', //歌手详情
    
}