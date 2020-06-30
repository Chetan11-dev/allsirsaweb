import { action } from '@storybook/addon-actions'


import React from 'react'
import { appname } from '../utils/apputils'
import Product, { ProductModelMeta } from '../components/product/Product'
// import { productChanged, product } from '../components/product/Product.spec'
import { Loader } from '../features/loader/Loader'
import { CategoryApi } from '../api/databaseApi/categoryApi'
import { beautify } from '../utils/logutils'
import { data } from '../api/databaseApi/data'
import { getInitialProduct } from '../features/productMaster/productMasterSliceUtils'
// import {  } from '../features/productMaster/ProductMaster';


export var wrongproduct: ProductModelMeta = {
    imageFile: '',
    product: {
        subcategory: "***** ",
        unit: 'kgG',
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
        category: "--------",
        title: "Arhar",
        sid: '1',
        id: '1'
    }
}


export var defaultproduct: ProductModelMeta = {
    imageFile: '',
    product: {
        subcategory: "***** ",
        unit: 'kgG',
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
        category: "--------",
        title: "Arhar",
        sid: '1',
        id: '1'
    }
}


export var corectproduct: ProductModelMeta = {
    imageFile: '',
    product: {
        subcategory: "Pulses",
        unit: 'g',
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
}

export const actionsData = {
    onProductChanged: action('onProductChanged'),
    onVariationChanged: action('onVariationChanged'),
}

export function productChanged(p: ProductModelMeta) {
    actionsData.onProductChanged(beautify(p))
}


export const CorrectProduct = () => (
    <ProductWrapper {...corectproduct} />
)

export const Initialproduct = () => (
    <ProductWrapper {...getInitialProduct()} />
)

export const WrongProduct = () => (
    <ProductWrapper {...wrongproduct} />
)


export const ProductWrapper = (p: ProductModelMeta) => {
    return <Product onChange={productChanged} categorylist={data.categories} product={p} />
}

