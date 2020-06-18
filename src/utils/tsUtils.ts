export function isEmpty(param: any) {
    if (param == null || !param) {
        return true
    } else return false
}

export function isListEmpty(param: any[] | null | undefined) {
    if (isEmpty(param) || param!.length === 0) {
        return true
    } else return false
}
// import { isEmpty, isListEmpty } from '';