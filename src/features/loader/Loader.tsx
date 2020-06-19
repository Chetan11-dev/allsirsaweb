
import React, { useState, useEffect } from 'react'
import AppSpinner from '../../components/Layout/spinner'

interface Props<A> {
    operation: () => Promise<A>,
    onSuccess: (a: A) => JSX.Element
}

export function Loader<A>(prop: Props<A>) {
    const { onSuccess } = prop

    const [state, setState] = useState<
        { loading: boolean, data: A | null, error: string | null }>({ loading: true, data: null, error: null })

    useEffect(() => {
        async function perform() {
            try {
                const data = await prop.operation()
                setState({ loading: false, error: null, data })
            } catch (err) {
                setState({ loading: false, error: err.toString(), data: null })
            }
        }
        perform()
    }, [prop])

    if (state.loading) {
        return <AppSpinner />
    } else {
        // console.count('else')
        if (state.error) {
            // console.count('error')
            return <h1>{state.error}</h1>
        } else {
            // console.count('success')
            return onSuccess(state.data as A)
        }
    }
}