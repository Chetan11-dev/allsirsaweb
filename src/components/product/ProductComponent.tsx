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
    subcategory: "Fruits",
    unit: 'g',
    variations: [],
    productimage: "https://picsum.photos/id/237/200/300",
    category: "Vegetables",
    title: "Apple",
    sid: "1",
}

export const ProductComponent = () => {
    const api = new CategoryApi()

    function productChanged(p:ProductModel) {
        product = p 
        console.table(product);
    }
    return (
        <div>
            <Loader operation={api.getDataCollection} onSuccess={(a) => {
                // TODO solve onsucess called twice use  to know console.count('onSuccess')
                return <Product onChange={productChanged} product={product} categorylist={a} />

            }} />
        </div>

    )
}

export default ProductComponent

