import { AlertProps } from 'react-bootstrap/Alert'
import { v4 as uuidv4 } from 'uuid'
import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

const initialState = false
export const loaderSlice = createSlice({
    name: 'apploader',
    initialState,
    reducers: {
        hideLoader: () => {
            return false
        },
        showLoader: () => {
            return true
        },
    },
})

const { hideLoader, showLoader } = loaderSlice.actions

export function setLoader(dispatch: Dispatch<any>) {
    dispatch(showLoader())
}

export function unsetLoader(dispatch: Dispatch<any>) {
    dispatch(hideLoader())
}

export const selectLoader = (state: RootState) => {
    // console.log(state)
    return state.apploader
}

export default loaderSlice.reducer
// usage
// import { useDispatch } from 'react-redux'
// import { setLoader, unsetLoader } from '../../features/appLoader/appLoaderSlice'
// const dispatch = useDispatch()
//     setLoader(dispatch)

//     setTimeout(() => {
//         unsetLoader(dispatch)
//     }, 5000)