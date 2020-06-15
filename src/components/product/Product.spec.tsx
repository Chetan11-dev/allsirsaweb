
import { Product } from './Product'
// import { product } from './ProductComponent'
import { shallow } from 'enzyme'
import React from 'react'
import { ProductModel } from '../../models/ModelProduct'

import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAtrr } from '../../utils/testutils'

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
})

export const product: ProductModel = {
  subcategory: "Fruits",
  unit: 'g',
  variations: [],
  productimage: "https://picsum.photos/id/237/200/300",
  category: "Vegetables",
  title: "Apple",
  sid: "1",
}

test('should display a product', async () => {
  let component = shallow(<Product product={product} />)
  const wrapper = findByTestAtrr(component, 'headerComponent')
  expect(wrapper.length).toBe(1)
})