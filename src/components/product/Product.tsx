import { connect, useDispatch, useSelector } from 'react-redux'
import * as React from 'react'
import { setAlert } from '../../features/alert/alertSlice'
import { ProductModel } from '../../models/ModelProduct'

interface Props {
    product: ProductModel
}

const Product = ({ product: { subcategory
    , unit
    , variations
    , productimage
    , category
    , title
    , sid } }: Props) => {

    return (
        <div data-test="product">
            {'Received as props ' + JSON.stringify(title)}
        </div>
    )
}

export default Product