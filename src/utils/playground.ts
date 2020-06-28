// Dont destruce they make true copies
import { ModelVariation } from '../api/models/ModelProduct'


function isValidVariation(params: string) {
    const [value, price] = params.split('-')
    const v = parseInt(value)
    const p = parseInt(price)
    if (v && p) {
        return true
    } else return false
}

function toVariation(params: string): ModelVariation {
    const [value, price] = params.split('-')
    return { price: parseInt(price), value: parseInt(value) }
}


function stringToVariations(s: string): ModelVariation[] {
    var ls = s.split(',').map((s) => s.trim())
    // filter it 
    ls = ls.filter(isValidVariation)
    // map to variation
    return ls.map(toVariation)
}

function variationsToString(params: ModelVariation): string {
    // map to a string 
    // reduce with commass
    return ''
}
// console.log()

//  isValidVariation('40=5')
//  isValidVariation('')
//  isValidVariation('405')
//  isValidVariation('4-5')
console.table(
    stringToVariations('40*-5,4/*27,')
)

export { }