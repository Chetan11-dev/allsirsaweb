import { combineReducers } from '@reduxjs/toolkit'
import alertReducer from '../features/alert/alertSlice'
const rootReducer = combineReducers({
    alert: alertReducer
})

// export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

