import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routeConfig from './routeConfig.js'


const router = () => {
    return <Router>
        <Switch>
            {renderRoutes(routeConfig)}
        </Switch>
    </Router>
}

export default router