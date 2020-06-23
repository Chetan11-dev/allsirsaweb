
import { CategoryApi } from '../../api/databaseApi/categoryApi'
import { mount, } from 'enzyme'
import React from 'react'

import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { didFindByTestAtrr, findAndDebug, } from '../../utils/testutils'
import Product, { title, variations, ProductModelMeta } from './Product'
// import { product, productChanged } from './ProductComponent'
import { stringToVariations } from './variation'

export var product: ProductModelMeta = {
  product: {
    subcategory: "Pulses",
    unit: 'kg',
    variations: [
      {
        price: 70,
        value: 20
      }, {
        price: 90,
        value: 30
      }
    ],
    productimage: "https://picsum.photos/id/237/200/300",
    category: "Grocery & Staples",
    title: "Arhar",
    sid: '1',
    id: '1'
  }
}

export function productChanged(p: ProductModelMeta) {
  product = p
}

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
})

// test('should display a product', async () => {
//   let component = mount(<Product product={product} />)
//   const wrapper = findByTestAtrr(component, 'product')

//   expect(wrapper.length).toBe(1)
// })

// function getProductComponent() {
//   let component = shallow(<div><Product on product={product} /></div>)
//   const wrapper = findByTestAtrr(component, 'product')
//   return wrapper
// }

describe("ProductFormtEST", () => {
  const f = async () => {
    const api = new CategoryApi()
    const cl = await api.getDataCollection()
    const component = mount(<Product categorylist={cl} onChange={productChanged} product={product} />)

    const inputs = component.find('input')
    const titleInput = inputs.findWhere(w => didFindByTestAtrr(w, title))

    const variationInput = inputs.findWhere(w => didFindByTestAtrr(w, variations))

    function inputMatchesWithProductTitle() {
      expect(titleInput.prop('value')).toBe(product.product.title)
    }

    function inputMatchesWithProductVariation() {
      expect(stringToVariations(variationInput.prop('value'))).toStrictEqual((product.product.variations))
    }

    // console.log(component.debug())
    inputMatchesWithProductVariation()
    inputMatchesWithProductTitle()

    // TODO  do input change and test

    // titleInput.simulate('change', { target: { value: 'Urad', name: title } })


    // inputMatchesWithProductTitle()

    // // console.log(component.)
    // variationInput.simulate('change', { target: { value: '8-78,7-85', name: variations } })
    // inputMatchesWithProductVariation()
    // TODO  do variationbadges test
    // findAndDebug(component, variationsBadges)
    // expect(findByTestAtrr(component, variationsBadges).children).toBe(product.variations.length)
  }

  it('run async tests', () => {
    return f()
  })

})