import React from 'react'
import { ModelOrder } from './../../api/models/ModelOrder'
import { beautify } from './../../utils/logutils'
import { Row, Col, Container } from 'react-bootstrap'
import { ModelProduct, ModelVariation } from '../../api/models/ModelProduct'
import { calculatePrice, calculateVariant, variation } from './orderUtils'
import { BadgeInfo, createBadge, createBadges } from '../../utils/bootstrapUtils'



interface Props {
    order: ModelOrder, onChange: (m: ModelOrder) => void
}

function bracket(o: any) {
    return `(${o})`
}


export const Order = ({ order, onChange, order: { product: { category, variations, unit, subcategory, title, productimage, }, units, status, createdAt } }: Props) => {

    const calPrice = calculatePrice(order)
    const bs: BadgeInfo[] = [{ info: status, variant: 'warning' }, { info: calculateVariant(variation(order), unit) }]

    return (
        <div className="container border border-primary ">
            <div className="m-2"><div className="row">
                <div>
                    <img className='h-50 w-50 border border-primary ' src={productimage} alt="" />
                </div>
                <div className="col border border-primary  ">
                    <div className="row justify-content-between m-0 p-0">
                        <h5>{title + bracket(units)}</h5>
                        <h5>{'₹' + calPrice}</h5>
                    </div>
                    <div className='row m-0 p-0'>
                        <p>dd</p>
                    </div>
                </div>
            </div>
                {createBadges(bs)}
            </div>
        </div>
    )
}