import alert, { hideAlert, showAlert, initialState } from './alertSlice'
import { initalReducerState, stateUpdate } from '../../utils/reducertestutils'
/** Usage
 * 
*const dispatch = useDispatch()

    React.useEffect(() => {
        setAlert({ msg: "Helloa", type: "danger" }, dispatch)
    }, [])
* */
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
  stateUpdate({ alerts: [{ msg: '250', type: 'dark', id: '1' }] }, initialState, {
    type: hideAlert.type,
    payload: '1'
  }, alert)

}



describe('alert reducer', () => {

  it('should handle initial state', () => {
    initalReducerState(initialState, alert,)
    // expect(alert(undefined, { type: '' })).toEqual(initialState)
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

