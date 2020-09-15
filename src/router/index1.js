import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/head'
import NewSong from '../pages/NewSong'
import Rank from '../pages/Rank'
import SongList from '../pages/SongList'
import Songer from '../pages/Songer'

const RootRouter = props => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='content'>
          <Switch>
            <Route path={`/`} exact component={NewSong} ></Route>
            <Route path={`/rank`} exact component={Rank} ></Route>
            <Route path={`/songList`} exact component={SongList} ></Route>
            <Route path={`/songer`} exact component={Songer} ></Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default RootRouter
