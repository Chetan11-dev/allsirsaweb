
import React from 'react'
import ProductComponent from '../components/product/ProductComponent'
import { Alert } from '../features/alert/Alert'
import { useSelector } from 'react-redux'
import { selectAlert } from '../features/alert/alertSlice'


const App = () => {

    return (
        <div>


            <ProductComponent />
            < Alert />
        </div>

    )
}

export default App

