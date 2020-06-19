
import React from 'react'
import { Alert } from '../features/alert/Alert'

import { AppLoader } from '../features/appLoader/AppLoader'
import { ProductMaster } from '../features/productMaster/ProductMaster'


const App = () => {

    return (
        <div>
            < Alert />
            <AppLoader />
            <ProductMaster />

        </div>

    )
}

export default App

