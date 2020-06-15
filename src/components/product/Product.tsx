import { connect } from 'react-redux'
import * as React from 'react'
import { setAlert } from '../../actions/alert'




const Product = (props: any) => {
    // Extract props
    // props.setAlert('hari' , '')

    props.setAlert({
        alertType: 'success', msg: 'Success'
    })

    return (
        <div data-test="headerComponent">
            {'Received as props ' + JSON.stringify(props.product)}
        </div>
    )
}

export default connect(null, { setAlert })(Product)