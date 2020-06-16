import { connect, useDispatch, useSelector } from 'react-redux'
import * as React from 'react'
import { setAlert } from '../../features/alert/alertSlice'





const Product = (props: any) => {
    // Extract props
    // props.setAlert('hari' , '')


    const dispatch = useDispatch()


    React.useEffect(() => {
        setAlert({
            msg: 'ss', type: 'success'

        }, dispatch)
        
    }
        , [])

    return (
        <div data-test="headerComponent">
            {'Received as props ' + JSON.stringify(props.product)}
        </div>
    )
}

export default Product