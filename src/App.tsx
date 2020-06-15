import { Provider } from 'react-redux'
import store from './store'
import React from 'react'
import ProductComponent from './components/product/ProductComponent'

const App = () => {


    return (
        <Provider store={store}><div>
            <ProductComponent />
        </div></Provider>

    )
}

export default App
