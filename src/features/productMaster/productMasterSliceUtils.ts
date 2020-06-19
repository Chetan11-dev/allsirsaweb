import { useDispatch } from 'react-redux'
import { setLoader, unsetLoader } from '../appLoader/appLoaderSlice'

import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { ProductModel } from '../../api/models/ModelProduct'
import { data } from '../../api/databaseApi/data'
import { isEmptyString, isNotValidString as isNotEmpty, isListEmpty, isEmpty } from '../../utils/tsUtils'
import { lazy } from 'react'
import { string } from 'prop-types'
import { product } from '../../components/product/ProductComponent'
import { ProductModelMeta } from '../../components/product/Product'
import { setAlert } from '../alert/alertSlice'
import { ProductMasterState } from './productMasterSlice'

export function isValidProduct(param: ProductModelMeta) {
    // productimage  might be null and be have got product file 

    const { category, variations, unit, subcategory, title, productimage } = param.product
    const ls: string[] = [category, unit, subcategory, title,]

    if (isAnyEmpty(ls) || isListEmpty(variations)) {
        // Invalid 
        return false
    }
    //TODO TAKE IMAGE FILE

    if (!productimage && !param.imageFile) {
        return false
    }

    return true
}


export function purifyState(s: ProductMasterState): ProductMasterState {
    const allprods = [...s.inCorrect, ...s.pending,]

    const pending = allprods.filter(isValidProduct)
    const inCorrect = allprods.filter((v) => !isValidProduct(v))

    return { pending, inCorrect }

}


export function isAnyEmpty(ls: string[]) {
    if (ls.some(isEmptyString)) { return true } else return false
}

export const defaultunit = 'g'
export const defaultProduct = {
    product: {
        title: '',
        unit: defaultunit,
        variations: [],
        category: '',
        subcategory: '',
    }
}

export function getProduct(): ProductModelMeta {
    return { ...defaultProduct }
}