import { setLoader, unsetLoader } from '../../features/appLoader/appLoaderSlice'

import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { ProductModelMeta } from '../../components/product/Product'
import { setAlert } from '../alert/alertSlice'
import { purifyState, getProduct } from './productMasterSliceUtils'


export interface ProductMasterState {
    pending: ProductModelMeta[],
    inCorrect: ProductModelMeta[],
}

export const initialState: ProductMasterState = {
    pending: [],
    inCorrect: []
}

export const productMaster = createSlice({
    name: 'alert',
    initialState,

    reducers: {
        emptyState: () => {
            return initialState
        },
        updateState: (state, action: PayloadAction<ProductMasterState>) => {
            return action.payload
        },
        addProduct: (state,) => {
            const p = getProduct()
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

    //  dispatch loading state 
    setLoader(dispatch)

    const ns = purifyState(s)
    const pendingprods = ns.pending.length

    const isSuccesFull = await addToFirestore(false)
    if (isSuccesFull) {
        setAlert({
            msg: `Congratulations you have sucessfully added ${pendingprods} products to your store !!!',type:'success`, type: 'success'
        }, dispatch)
        s.pending = []
        dispatch(updateState(s))
    } else {
        setAlert({
            msg: `Sorry we were unable to add products to your store. Please try again if the issue still persists. Feel free to contact our support team at 9996888551`, type: 'danger',
        }, dispatch, 7)

        dispatch(updateState(s))
    }
    //  dispatch loading: false  state 
    unsetLoader(dispatch)
}

export const selectState = (state: RootState) => {
    return state.productMaster
}

export default productMaster.reducer