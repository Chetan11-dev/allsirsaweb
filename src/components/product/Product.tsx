import Alert from 'react-bootstrap/Alert'

import * as React from 'react'
import { ProductModel } from '../../models/ModelProduct'
import Button from 'react-bootstrap/Button'

export interface Props {
    product: ProductModel
}


export const Product = (props: Props) => {
    // Extract props
    const { subcategory, unit, variations, productimage, category, title, sid } = props.product

    return (
        <div data-test="headerComponent">
            { 'Received as props '+ JSON.stringify(props.product)}
        </div>
    )
}
