
import React from 'react'
import ProductComponent from '../components/product/ProductComponent'
import { Alert } from '../features/alert/Alert'

import { AppLoader } from '../features/appLoader/AppLoader'


const App = () => {

    return (
        <div>
            < Alert />
            <AppLoader />
            <ProductComponent />

        </div>

    )
}

export default App

