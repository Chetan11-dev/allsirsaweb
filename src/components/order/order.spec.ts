import { price, variant, variation } from './orderUtils'

import React from 'react'
import { ModelOrder } from './../../api/models/ModelOrder'
import { beautify } from './../../utils/logutils'
import { Row, Col, Container } from 'react-bootstrap'
import { ModelProduct, ModelVariation } from '../../../ModelProduct'
import { data } from '../../api/databaseApi/data'


describe(' test', () => {

    const o = data.orders[0]

    it('price', () => {
        expect(price(o)).toBe(140)
    })


    it('variant', () => {
        expect(variant(variation(o), o.product.unit)).toBe('20 ml')
    })

})