import { Provider } from 'react-redux'
import store from './store'
import React from 'react'
import ProductComponent from './components/product/ProductComponent'
import Alerts from './components/Layout/Alert'

const App = () => {

    
    return (
        <Provider store={store}><div>
            <Alerts/>
            <ProductComponent />
        </div></Provider>

    )
}

export default App
