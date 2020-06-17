
import { shallow, mount } from 'enzyme'
import React from 'react'
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAtrr } from '../../utils/testutils'
import { Loader } from './Loader'

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
})
export function wait(timeout: number) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}

export async function timer() {
  console.log('object')
  await wait(10)

}

export async function timerError() {
  await wait(500)
  throw 'Error'
}

it('should render spinne', async (done) => {

  let component = mount(<Loader operation={timer} onSuccess={() => (<h1 data-test='success' >Success</h1>)} />)
  const wrapper = component.find(`[data-test='${'loaderspinnerodloader'}']`)
  // const wrapper = findByTestAtrr(component, 'loaderspinner')
  console.log('wrapper.debug()')
  console.log(wrapper.debug())
  expect(wrapper.length).toBe(1)

  setTimeout(() => {
    // const wrapperNew = findByTestAtrr(component, 'success')
    console.log(wrapper.debug())
    // console.log(wrapperNew.debug())
    // expect(wrapperNew.length).toBe(5)
    done()
  }, 600)

})


// function getProductComponent () {
//   let component = shallow(<div><Product product={product} /></div>)
//   const wrapper = findByTestAtrr(component, 'product')
//   return wrapper
// }

// it('should mutate product', async () => {
//   const wrapper = shallow(<div><Product product={product} /></div>)
//   // let component = z
//   console.log(wrapper.props())

//   // Assert its initial state 



//   // Mutate it 
//   // Assert final state 

//   console.log(wrapper.debug())
//   expect(wrapper.length).toBe(1)
// })