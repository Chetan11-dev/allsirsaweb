import { combineReducers } from '@reduxjs/toolkit'
import alertReducer from '../features/alert/alertSlice'
import productMasterReducer from '../features/productMaster/productMasterSlice'
const rootReducer = combineReducers({
    alert: alertReducer,
    productMaster: productMasterReducer

})

// export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

