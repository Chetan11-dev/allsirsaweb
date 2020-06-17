import { Spinner } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'

interface Props<A> {
    operation: () => Promise<A>,
    onSuccess: (a: A) => JSX.Element
}

export function Loader<A>(prop: Props<A>) {
    const { operation, onSuccess } = prop

    const [state, setState] = useState<
        { loading: boolean, data: A | null, error: string | null }
    >({ loading: true, data: null, error: null })

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
    }, [])

    if (state.loading) {
        return <Spinner animation="border" role="status">
            <span data-test='loaderspinnerodloader' className="sr-only">Loading...</span>
        </Spinner>
    } else {
        if (state.error) {
            return <h1>{state.error}</h1>
        } else {
            return onSuccess(state.data as A)
        }
    }
}


