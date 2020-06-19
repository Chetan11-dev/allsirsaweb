export function isEmpty(param: any) {
    if (param == null || !param) {
        return true
    } else return false
}
type Empty = | null | undefined
export function isListEmpty(param: any[] | Empty) {
    if (isEmpty(param) || param!.length === 0) {
        return true
    } else return false
}

export function isEmptyString(p: string | Empty) {
    if (isEmpty(p) || p!.trim().length === 0) {
        return true
    } else return false
}

export function isNotValidString(p: string | Empty) {
    return !isEmptyString(p)
}

// import { isEmpty, isListEmpty,isInValidString ,isValidString} from '';import { type } from '../app/store';
