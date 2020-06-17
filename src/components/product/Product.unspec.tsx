
import { shallow } from 'enzyme'
import React from 'react'
import { ProductModel } from '../../api/models/ModelProduct'

import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAtrr } from '../../utils/testutils'
import Product from './Product'

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
  const wrapper = findByTestAtrr(component, 'product')

  expect(wrapper.length).toBe(1)
})

function getProductComponent () {
  let component = shallow(<div><Product product={product} /></div>)
  const wrapper = findByTestAtrr(component, 'product')
  return wrapper
}

it('should mutate product', async () => {
  const wrapper = shallow(<div><Product product={product} /></div>)
  // let component = z
  console.log(wrapper.props())

  // Assert its initial state 



  // Mutate it 
  // Assert final state 

  console.log(wrapper.debug())
  expect(wrapper.length).toBe(1)
})