import { Spinner } from 'react-bootstrap'
import React from 'react'

const AppSpinner = () => {
    return (
        <div className='text-center m-5'><Spinner animation="border" role="status">
            <span data-test='loaderspinnerodloader' className="sr-only">Loading...</span>
        </Spinner></div>
    )
}

export default AppSpinner
