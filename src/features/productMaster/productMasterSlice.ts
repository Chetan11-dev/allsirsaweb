import { setLoader, unsetLoader } from '../../features/appLoader/appLoaderSlice'

import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { ProductModelMeta } from '../../components/product/Product'
import { setAlert } from '../alert/alertSlice'
import { purifyState, getInitialProduct } from './productMasterSliceUtils'
// import { product } from './ProductMaster'
import { isListNotEmpty, isListEmpty } from '../../utils/tsUtils'
// import { product } from '../../components/product/Product.spec'
var product: ProductModelMeta = {
    product: {
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
  }

export interface ProductMasterState {
    pending: ProductModelMeta[],
    inCorrect: ProductModelMeta[],
}

export const initialState: ProductMasterState = {
    pending: [],
    inCorrect: []
}
export const testState: ProductMasterState = {
    pending: [{ ...product }, {
        ...product, product: {
            ...product.product, category: '****',

            subcategory: '****',
            title: 'p2'
        }

    }],
    inCorrect: [{ ...product, product: { ...product.product, category: '****', title: '', variations: [] } }]
}

export const productMaster = createSlice({
    name: 'alert',
    initialState,

    reducers: {
        emptyState: () => {
            return initialState
        },
        updateState: (_, action: PayloadAction<ProductMasterState>) => {
            return action.payload
        },
        addProduct: (state,) => {
            const p = getInitialProduct()
            state.pending.unshift(p)
            return state
        },
    },
})

export const { emptyState, updateState, addProduct } = productMaster.actions




// TODO complete implementation and move to api folder
export async function addToFirestore(shouldThrowError: boolean) {

    try {
        // TODO ADD TO FIRESTORE 
        // const b = fs.batch()
        // // const id = 

        // params.forEach((d) => {
        //     b.set(col.doc(v4()), d)
        // })
        // await b.commit()

        if (shouldThrowError) {
            throw 'Error'
        }
        return true
    } catch (error) {
        console.error(error)
        return false
    }

}



export async function addProductsToDB(s: ProductMasterState, dispatch: Dispatch<any>) {


    const ns = purifyState(s)

    if (isListNotEmpty(ns.inCorrect)) {
        const len = ns.inCorrect.length
        setAlert({
            msg: `${len} products details are incorrect`, type: 'danger'
        }, dispatch)

    }

    if (isListEmpty(ns.pending)) {
        return
    }

    setLoader(dispatch)
    const isSuccesFull = await addToFirestore(false)

    if (isSuccesFull) {
        const pendingprods = ns.pending.length
        setAlert({
            msg: `Congratulations you have sucessfully added ${pendingprods} products to your store`, type: 'success'
        }, dispatch)
        ns.pending = []

        dispatch(updateState(ns))
    } else {
        setAlert({
            msg: `Sorry we were unable to add products to your store. Please try again if the issue still persists. Feel free to contact our support team at 9996888551`, type: 'danger',
        }, dispatch, 7)

        dispatch(updateState(ns))
    }
    //  dispatch loading: false  state 
    unsetLoader(dispatch)
}


export async function addNewProduct(dispatch: Dispatch<any>) {

    dispatch(addProduct())

    setAlert({
        msg: `Added 1 product`, type: 'success'
    }, dispatch)
}

export const selectProductMaster = (state: RootState) => {
    return state.productMaster
}

export default productMaster.reducer