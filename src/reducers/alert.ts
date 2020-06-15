import { AlertProp } from './../actions/alert'
import { SET_ALERT, REMOVE_ALERT } from '../actions/types'

const initialState: any[] = []

export default function (state = initialState, action: any) {
  const { type, payload } = action

  switch (type) {
    case SET_ALERT:
      return [...state, payload]
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload.id)
    default:
      return state
  }
}
