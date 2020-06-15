import React from 'react'
import { ProductModel } from '../../models/ModelProduct'
import { Product } from './Product'


export const product: ProductModel = {
    subcategory: "Fruits" , 
    unit: 'g' , 
    variations: [] , 
    productimage: "https://picsum.photos/id/237/200/300" , 
    category: "Vegetables" , 
    title: "Apple" , 
    sid: "1" , 
}

export const ProductComponent = () => {

    

    return (
        <Product product={product}  />
    )
}

export default ProductComponent
