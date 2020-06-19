import { combineReducers } from '@reduxjs/toolkit'
import alertReducer from '../features/alert/alertSlice'
import productMasterReducer from '../features/productMaster/productMasterSlice'
import appLoaderReducer from '../features/appLoader/appLoaderSlice'

const rootReducer = combineReducers({
    alert: alertReducer,
    productMaster: productMasterReducer,
    apploader: appLoaderReducer

})

// export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

