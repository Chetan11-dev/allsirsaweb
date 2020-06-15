import { v4 as uuidv4 } from 'uuid'
import { SET_ALERT, REMOVE_ALERT } from './types'


export interface AlertProp {
  msg: string, alertType: string
}


export const setAlert = (prop: AlertProp) => (dispatch: any) => {

  const { msg, alertType } = prop

  console.log({ dispatch })
  const id = uuidv4()

  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  })

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: { id } }), 3000)
}
