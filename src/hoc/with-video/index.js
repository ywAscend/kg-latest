import React from 'react'
import { connect } from 'react-redux'
import videoRoutine from '../../store/routines/videoPlay'

//获取组件名称
const getDisplayName = WrappedComponent => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}


export default title => WrappedComponent => {
    const mapStateToProps = state => ({ ...state.videoRoutine })
    
    const mapMethodToProps = (dispatch) => ({
        nextMusic: (index, hash) => {
            dispatch({
                type: videoRoutine.TRIGGER,
                index,
                hash
            })
        }
    })

    return connect(mapStateToProps, mapMethodToProps)(class  extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                playFlag: true
            }
        }
        myAudio = React.createRef()
        static displayName = `videoPlayer${getDisplayName(WrappedComponent)}`
        
        //播放
        handleTogglePlayMusic = () => {
            this.setState({
                playFlag: !this.state.playFlag
            }, () => {
                console.log(`${this.state.playFlag ? '播放' : '暂停'}音乐`)
                if (!this.state.playFlag) {
                    this.myAudio.current.pause()
                    return
                }
                this.myAudio.current.play()
            })
        }

        handleNextNum = (musicIndex,playDatas) => {
            let nextNum = Number(musicIndex) + 1
            let nextMusicIndex = nextNum >= playDatas.length ? 0 : nextNum
            if(playDatas[nextMusicIndex].hasOwnProperty('group')){
                return playDatas[nextMusicIndex].group.length>0 ?  this.handleNextNum(nextMusicIndex,playDatas) : nextMusicIndex
            }
            return nextMusicIndex
        }
        
        getNextMusicParam = () => {
            const { musicIndex, playDatas } = this.props
            const nextMusicIndex = this.handleNextNum(musicIndex,playDatas)
            const nextHash = playDatas[nextMusicIndex].hash

            console.log('下一曲索引', nextMusicIndex, nextHash)
            return {
                musicIndex: nextMusicIndex,
                hash: nextHash
            }
        }

        //下一曲
        handleNextMusic = () => {
            const { musicIndex, hash } = this.getNextMusicParam()
            this.props.nextMusic(musicIndex, hash)
        }

        handleAutoPlayEnded = () => {
            this.setState({
                playFlag: false
            },()=>{
                this.autoNextMusic()
            })
        }

        autoNextMusic = () => {
            this.setState({
                playFlag:true
            },()=>{
                this.handleNextMusic()
            })
        }

        //下载
        handleDownLoadMusic = () => {
            alert('该功能暂未开放')
        }

        urlFiter = param => param && param.replace("{size}", 400)

        render() {
            let mapMethodToProps = {
                handleTogglePlayMusic: this.handleTogglePlayMusic,
                NextMusic: this.handleNextMusic,
                myRef: this.myAudio,
                musicData: this.props.playMusicInfo,
                filter: this.urlFiter,
                handleDownLoadMusic: this.handleDownLoadMusic,
                handleAutoPlayEnded: this.handleAutoPlayEnded
            }
            return this.props.flag ? <WrappedComponent  {...mapMethodToProps} {...this.state} /> : null
        }
    })
}

