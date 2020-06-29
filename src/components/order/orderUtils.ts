import React from 'react'
import { ModelOrder } from './../../api/models/ModelOrder'
import { beautify } from './../../utils/logutils'
import { Row, Col, Container } from 'react-bootstrap'
import { ModelProduct, ModelVariation } from '../../../ModelProduct'
import { data } from '../../api/databaseApi/data'

function price(o: ModelOrder) {
    // 25 g * 2 = Rs 50
    return o.units * o.product.variations[0].price
}


function variation(o: ModelOrder) {
    return o.product.variations[0]
}

function variant(p: ModelVariation, unit: string) {
    // 25 g 
    return `${p.value} ${unit}`
}

export {price , variant,variation}