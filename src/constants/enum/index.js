export const NAV_URL = ['newSong', 'rank', 'songList', 'songer']

export const URL_ENUM = {
    NEW_SONG: '/api/?json=true', //新歌列表
    //NEW_SONG: '/api/newSong' //新歌列表--server.js提供数据
    SONG_INFO: '/api/app/i/getSongInfo.php?cmd=playInfo',  //歌曲信息
    RANK_INFO: '/api/rank/list&json=true', //排名
}