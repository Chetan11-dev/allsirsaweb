import { connect, useSelector } from 'react-redux'
import React from 'react'
import { AlertInfo, selectAlert } from './alertSlice'
import RootState from '../../app/rootReducer'
import AlertB, { AlertProps } from 'react-bootstrap/Alert'

export interface Props {
    alerts: AlertInfo[]
}

export const Alert = (
    // { alerts }: Props
) => {

    const { alerts } = useSelector(
        selectAlert
    )

    if (alerts.length === 0) {
        return <></>
    }


    const elems = alerts.map(alert => (
        <AlertB  className="m-4" key={alert.id} variant={alert.type as AlertProps['variant']}>
            {alert.msg}
        </AlertB>
    ))
    return <div>{elems}</div>

}


