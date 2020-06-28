// Dont destruce they make true copies

import { ModelVariation } from '../../api/models/ModelProduct'
import { isListEmpty } from '../../utils/tsUtils'
// import { logt } from '../../utils/apputils'

function splitTrim(s: string, split: string): string[] {
    return s.split(split.trim()).map((v) => v.trim())
}

export function isValidVariation(params: string) {
    const ls = splitTrim(params, '-')
    const [value, price] = ls

    const v = parseInt(value)
    const p = parseInt(price)

    if (v && p && ls.length === 2 && v >= 0 && p >= 0) {
        return true
    } else return false
}

function toVariation(params: string): ModelVariation {
    const [value, price] = splitTrim(params, '-')
    return { price: parseInt(price), value: parseInt(value) }
}


export function stringToVariations(s: string): ModelVariation[] {
    // can never happen if (s == null || !s) return []

    var ls = splitTrim(s, ',')
    // filter it 
    ls = ls.filter(isValidVariation)
    // map to variation
    return ls.map(toVariation)
}
function variationToString(v: ModelVariation) { return `${v.value}-${v.price}` }

export function variationsToString(params: ModelVariation[] | null | undefined): string {

    if (isListEmpty(params)) {
        return ''
    }
    // map to a string 
    const ls = params!.map(variationToString)
    // reduce with commass

    const lss = ls.reduce((prev, curr) => {
        return prev + ',' + curr
    })
    return lss
}
