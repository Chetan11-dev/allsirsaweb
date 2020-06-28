import React from 'react'
import { ModelOrder } from './../../api/models/ModelOrder'
import { beautify } from './../../utils/logutils'
interface Props {
    order: ModelOrder, onChange: (m: ModelOrder) => void
}
export const Order = ({ onChange, order }: Props) => {

    return (
        <div className="container border border-primary">

            <div>Hello</div>
            <div>Hello</div>

            <span>Hello</span>
            <span>Hello</span>
            <div className="row"> <span>Hello</span>
                <div className="col-12 bg-dark ">.col-6 </div>
            </div>

        </div>

    )
}
