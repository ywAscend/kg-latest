export const NAV_URL = ['newSong', 'rank', 'songList', 'singer']

export const URL_ENUM = {
    NEW_SONG: '/api/?json=true', //新歌列表
    //NEW_SONG: '/api/newSong' //新歌列表--server.js提供数据
    SONG_INFO: '/api/app/i/getSongInfo.php?cmd=playInfo',  //歌曲信息
    RANK_INFO: '/api/rank/list&json=true', //排名
    RANK_DETAIL_INFO: '/api/rank/info', //排名详情
    SONG_LIST_INFO: '/api/plist/index&json=true', //歌单
    SONG_LSIT_DETAIL_INFO: '/api/plist/list',//歌单详情
    SINGER_INFO: '/api/singer/class&json=true', //歌手
    SINGER_LIST_INFO: '/api/singer/list', //歌手列表
    
}