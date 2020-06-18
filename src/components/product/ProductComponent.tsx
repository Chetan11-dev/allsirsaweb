import React, { useEffect } from 'react'
import { ProductModel } from '../../api/models/ModelProduct'
import Product from './Product'
import { selectAlert } from '../../features/alert/alertSlice'
import { useSelector } from 'react-redux'
import { ModelCategoryList } from '../../api/models/ModelCategory'
import { CategoryApi } from '../../api/databaseApi/categoryApi'
import { Loader } from '../../features/loader/Loader'
import { timer100, timer500, timer400 } from '../../utils/asynUtils'
import { logo, logt } from '../../utils/apputils'
import beautify from 'js-beautify'


interface Props {
    product: ProductModel,
    catlist: ModelCategoryList
}

export var product: ProductModel = {
    subcategory: "Pulses",
    unit: 'kg',
    variations: [
        {
            price: 70,
            value: 20
        }, {
            price: 90,
            value: 30
        }
    ],
    productimage: "https://picsum.photos/id/237/200/300",
    category: "Grocery & Staples",
    title: "Arhar",
    sid: '1',
    id: '1'
}

export function productChanged(p: ProductModel) {
    product = p
}

export const ProductComponent = () => {

    const api = new CategoryApi()

    return (
        <div>
            <Loader operation={api.getDataCollection} onSuccess={(a) => {

                // TODO solve onsucess called twice use to reproduce console.count('onSuccess')
                return <Product onChange={productChanged} product={product} categorylist={a} />

            }} />
        </div>

    )
}

export default ProductComponent

