import React from 'react'
import { ProductModel } from '../../models/ModelProduct'
import Product from './Product'
import { selectAlert } from '../../features/alert/alertSlice'
import { useSelector } from 'react-redux'


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

    const a = useSelector(
        selectAlert

        
    )
    return (
        <Product product={product} />
    )
}

export default ProductComponent
