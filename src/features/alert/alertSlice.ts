import { AlertProps } from 'react-bootstrap/Alert'
import { v4 as uuidv4 } from 'uuid'
import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export type AlertInfo = {
    msg: string,
    type: AlertProps['variant'],
    id?: string
}

interface AlertState {
    alerts: AlertInfo[]
}

export const initialState: AlertState = {
    alerts: [],
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        hideAlert: (state, action: PayloadAction<string>) => {
            const index = state.alerts.findIndex((alert) => alert.id === action.payload)
            state.alerts.splice(index, 1)
        },
        showAlert: (state, action: PayloadAction<AlertInfo>) => {
            state.alerts.push(action.payload)
        },
    },
})

export const { hideAlert, showAlert } = alertSlice.actions

export function setAlert(alertInfo: AlertInfo, dispatch: Dispatch<any>, timeout = 5) {
    const id = uuidv4()

    alertInfo.id = id

    dispatch(showAlert(alertInfo))
    setTimeout(() => dispatch(hideAlert(id)), timeout * 1000)
}

export const selectAlert = (state: RootState) => {
    // console.log(state)
    return state.alert
}

export default alertSlice.reducer