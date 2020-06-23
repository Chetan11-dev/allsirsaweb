import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import { Alert } from '../features/alert/Alert'

import { AppLoader } from '../features/appLoader/AppLoader'
import { ProductMaster } from '../features/productMaster/ProductMaster'
import { getRoutes, routes } from '../components/routing/routes'


const App = () => {

    const rs = getRoutes(routes)
    return (
        <div>
            <Router>
                < Alert />
                <AppLoader />
                <ProductMaster />
                {/* {rs[0]} */}


                <Switch>
                    {rs}
                </Switch>

            </Router>
        </div>

    )
}

export default App

