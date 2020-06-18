import { wait, waitError, timer100, timer200, timer300, timer400, timer500, timer600 } from '../../utils/asynUtils'
import { snapshottoarray, toJsStr, beautify, log, logo, logt } from '../../utils/apputils'
import { findByTestAtrr, findAndDebug, didFindByTestAtrr, ifExistsDoElse } from '../../utils/testutils'
import { isEmpty, isListEmpty } from '../../utils/tsUtils'
import { initalReducerState, stateUpdate } from '../../utils/reducertestutils'
describe(' test', () => {

    it('should ', () => {

        expect(1).not.toBe(2)
    })

    it('should ', async () => {
        await timer300()
        expect(1).not.toBe(2)
    })

})