import { wait, waitError, timer100, timer200, timer300, timer400, timer500, timer600 } from '../../utils/asynUtils'
import { snapshottoarray, toJsStr, beautify, log, logo, logt } from '../../utils/apputils'
import { findByTestAtrr, findAndDebug, didFindByTestAtrr, ifExistsDoElse } from '../../utils/testutils'
import { isEmpty, isListEmpty } from '../../utils/tsUtils'
import { initalReducerState, stateUpdate } from '../../utils/reducertestutils'
import productMasterReducer, { initialState, emptyState, updateState, ProductMasterState } from './productMasterSlice'
import { data } from '../../api/databaseApi/data'

describe('Product Master test', () => {

    it('should handle initial state', () => {
        initalReducerState(initialState, productMasterReducer)
    })

    it('should handle update state', () => {
        const updatedState: ProductMasterState = { ...initialState, pending: data.products }
        const payload = { type: updateState.type, payload: updatedState }

        stateUpdate(initialState, updatedState, payload, productMasterReducer)
    })


})