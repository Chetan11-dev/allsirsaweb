// Dont destruce they make true copies

import { VariationModel } from '../../api/models/ModelProduct'
// import { logt } from '../../utils/apputils'

function splitTrim(s: string, split: string): string[] {
    return s.split(split.trim()).map((v) => v.trim())
}

export function isValidVariation(params: string) {
    const ls = splitTrim(params, '-')
    const [value, price] = ls

    const v = parseInt(value)
    const p = parseInt(price)

    if (v && p && ls.length === 2) {
        return true
    } else return false
}

function toVariation(params: string): VariationModel {
    const [value, price] = splitTrim(params, '-')
    return { price: parseInt(price), value: parseInt(value) }
}


export function stringToVariations(s: string): VariationModel[] {
    // can never happen if (s == null || !s) return []

    var ls = splitTrim(s, ',')
    // filter it 
    ls = ls.filter(isValidVariation)
    // map to variation
    return ls.map(toVariation)
}
function variationToString(v: VariationModel) { return `${v.value}-${v.price}` }
export function variationsToString(params: VariationModel[] | null | undefined): string {

    if (params == null || !params || params.length === 0) {
        return ''
    }
    // map to a string 
    const ls = params.map(variationToString)
    // reduce with commass

    const lss = ls.reduce((prev, curr) => {
        return prev + ',' + curr
    })
    return lss
}
