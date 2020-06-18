import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'


export type ProductMasterArgs = {
    id?: string
}

interface ProductMasterState {
    args: ProductMasterArgs[]
}


export const initialState: ProductMasterState = {
    args: [],
}

export const productMaster = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        updateState: (state,) => {
            // TODO Perform operation on state as 
            // state.args = null 
        },
        emptyState: (state, action: PayloadAction<ProductMasterArgs>) => {
            // TODO Perform operation on state as 
            // state.args.push(action.payload)  
        },
    },
})

export const { emptyState: actionPayLoad, updateState: actionNoPayLoad } = productMaster.actions

export function addProductsToFireStore(alertInfo: ProductMasterArgs, dispatch: Dispatch<any>) {
    // TODO Modify actionPayLoad 
    dispatch(actionPayLoad(alertInfo))
}

export const selectState = (state: RootState) => {
    return state.productMaster
}

export default productMaster.reducer