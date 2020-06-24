
import { mount } from 'enzyme'
import React from 'react'
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { Loader } from './Loader'
import { wait } from '../../utils/asynUtils'

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
})


// TODO  make it more robust by adding test check for other state as well 
it('should render spinner', () => {

    let component = mount(<Loader operation={() => wait(100)} onSuccess={() => (<h1 data-test='success' >Success</h1>)} />)
    const wrapper = component.find(`[data-test='${'loaderspinnerodloader'}']`)
    expect(wrapper.length).toBe(1)

})
