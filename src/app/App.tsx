
import React from 'react'
import ProductMaster from '../components/product/ProductComponent'
import { Alert } from '../features/alert/Alert'
import { useSelector } from 'react-redux'
import { selectAlert } from '../features/alert/alertSlice'


const App = () => {

    return (
        <div>


            <ProductMaster />
            < Alert />
        </div>

    )
}

export default App

