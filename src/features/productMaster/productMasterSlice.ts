import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { ProductModel } from '../../api/models/ModelProduct'
import { data } from '../../api/databaseApi/data'

export interface ProductMasterState {
    pending: ProductModel[],
    inCorrect: ProductModel[],
    unSuccesFull: ProductModel[],
    loading: boolean
}

export const initialState: ProductMasterState = {
    pending: [],
    inCorrect: [],
    unSuccesFull: [],
    loading: false
}

export const productMaster = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        emptyState: (state,) => {
            // TODO Perform operation on state as 
            // state.args = null 
        },
        updateState: (state, action: PayloadAction<ProductMasterState>) => {
            return action.payload
        },
    },
})

export const { emptyState, updateState } = productMaster.actions

export function addProductsToFireStore(alertInfo: ProductMasterState, dispatch: Dispatch<any>) {
    // TODO Modify actionPayLoad 
    // dispatch(actionPayLoad(alertInfo))
}

export const selectState = (state: RootState) => {
    return state.productMaster
}

export default productMaster.reducer