import alert, { hideAlert, showAlert, setAlert, selectAlert, initialState } from './alertSlice'


function addAlert() {
  expect(
    alert({ alerts: [] }, {
      type: showAlert.type,
      payload: { msg: '250', type: 'dark', id: '1' }
    })
  ).toEqual(
    { alerts: [{ msg: '250', type: 'dark', id: '1' }] }
  )
}
function removeAlert() {
  expect(
    alert({ alerts: [{ msg: '250', type: 'dark', id: '1' }] }, {
      type: hideAlert.type,
      payload: '1'
    })
  ).toEqual(initialState)
}

describe('alert reducer', () => {

  it('should handle initial state', () => {
    expect(alert(undefined, { type: '' })).toEqual(initialState)
  })

  it('should add alert', () => {
    addAlert()
  })

  it('should remove alert', () => {
    removeAlert()
  })

  it('should add and remove todo', () => {
    addAlert()
    removeAlert()
  })
})