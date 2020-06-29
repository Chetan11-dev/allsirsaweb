import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import {Router, Route} from 'react-router';
import React from 'react'
import { Alert } from '../features/alert/Alert'

import { AppLoader } from '../features/appLoader/AppLoader'
import { ProductMaster } from '../features/productMaster/ProductMaster'
import { toRoutes as getRoutes, routes, addHomeRoute } from '../components/routing/routes'
import { Navbar } from '../components/routing/Navbar'

import './app.css'
const App = () => {

    const { appRoutes, rawRoutes } = getRoutes(routes, ProductMaster)

    return (
        <div>
            <Router>
                < Alert />
                <AppLoader />
                <Navbar routes={rawRoutes} />
                <Switch>
                    {appRoutes}
                </Switch>

            </Router>
        </div>

    )
}

export default App

