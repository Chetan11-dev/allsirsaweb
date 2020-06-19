import { useSelector } from 'react-redux'
import React from 'react'
import { selectLoader } from './appLoaderSlice'
import AppSpinner from '../../components/Layout/spinner'

export const AppLoader = (
) => {
    const loading = useSelector(
        selectLoader
    )

    if (!loading) {
        return <></>
    } else {
        return <AppSpinner />
    }


}


