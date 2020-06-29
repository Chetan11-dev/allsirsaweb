import {     calculateVariant, variation, calculatePrice } from './orderUtils'

import { data } from '../../api/databaseApi/data'


describe(' test', () => {

    const o = data.orders[0]

    it('price', () => {
        expect(calculatePrice(o)).toBe(140)
    })

    it('variant', () => {
        expect(calculateVariant(variation(o), o.product.unit)).toBe('20 ml')
    })

})