
import { isEmptyString, isListEmpty } from '../../utils/tsUtils'
import { ProductModelMeta } from '../../components/product/Product'
import { ProductMasterState } from './productMasterSlice'

export function isValidProduct(param: ProductModelMeta) {
    // productimage  might be null and be have got product file 

    const { category, variations, unit, subcategory, title, productimage } = param.product
    const ls: string[] = [category, unit, subcategory, title,]

    if (isAnyEmpty(ls) || isListEmpty(variations)) {
        // Invalid 
        return false
    }

    //TODO TAKE IMAGE FILE then uncomment
    // if (!productimage && !param.imageFile) {
    //     return false
    // }

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
export const defaultProduct: ProductModelMeta = {
    product: {
        title: '',
        unit: defaultunit,
        variations: [],
        category: '',
        subcategory: '',
        productimage: undefined,
        sid: undefined,
        id: undefined,
    },
    imageFile: undefined
}

export function getDefaultProduct(): ProductModelMeta {
    return { ...defaultProduct }
}