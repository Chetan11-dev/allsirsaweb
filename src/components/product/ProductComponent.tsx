import React, { useEffect } from 'react'
import { ProductModel } from '../../api/models/ModelProduct'
import Product from './Product'
import { selectAlert } from '../../features/alert/alertSlice'
import { useSelector } from 'react-redux'
import { ModelCategoryList } from '../../api/models/ModelCategory'
import { CategoryApi } from '../../api/databaseApi/categoryApi';


interface Props {
    product: ProductModel,
    catlist: ModelCategoryList
}

export const product: ProductModel = {
    subcategory: "Fruits",
    unit: 'g',
    variations: [],
    productimage: "https://picsum.photos/id/237/200/300",
    category: "Vegetables",
    title: "Apple",
    sid: "1",
}

export const ProductComponent = () => {

    useEffect(() => {
        // CategoryApi().
    }, [])

    return (

        <Product product={product} />

    )
}

export default ProductComponent
