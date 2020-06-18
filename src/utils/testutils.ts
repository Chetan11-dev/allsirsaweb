import { ShallowWrapper, ReactWrapper } from 'enzyme'

type Wrapper = ShallowWrapper | ReactWrapper

export const findByTestAtrr = (component: Wrapper, attr: string) => {
  const wrapper = component.find(`[data-test='${attr}']`)
  return wrapper
}

export const findAndDebug = (component: Wrapper, attr: string) => {
  return ifExistsDoElse(findByTestAtrr(component, attr), (wrapper) => console.log(wrapper.debug()), () => console.log('No Component Found'))
}

export const didFindByTestAtrr = (component: Wrapper, attr: string) => {
  return ifExistsDoElse(findByTestAtrr(component, attr), () => true, () => false)
}

export function ifExistsDoElse<A>(component: Wrapper, e: (a: Wrapper) => A, n: (a: Wrapper) => A) {
  if (component.exists()) {
    return e(component)
  } else {
    return n(component)
  }
}

// import { findByTestAtrr, findAndDebug, didFindByTestAtrr  , ifExistsDoElse } from '../../utils/testutils';