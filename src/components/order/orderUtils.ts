import React from 'react'
import { ModelOrder } from './../../api/models/ModelOrder'
import { beautify } from './../../utils/logutils'
import { Row, Col, Container } from 'react-bootstrap'
import { ModelProduct, ModelVariation } from '../../api/models/ModelProduct'
import { data } from '../../api/databaseApi/data'

// calculate price 
function calculatePrice(o: ModelOrder) {
    
    return o.units * o.product.variations[0].price
}


function variation(o: ModelOrder) {
    return o.product.variations[0]
}

// 25 g 
function calculateVariant(p: ModelVariation, unit: string) {
    return `${p.value} ${unit}`
}

export {calculatePrice , calculateVariant ,variation}