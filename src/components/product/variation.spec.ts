import { stringToVariations, variationsToString, isValidVariation } from './variation'

it(
    'stringToVariations', () => {

        expect(stringToVariations('1*-50,4/*27,')).toStrictEqual([{ price: 50, value: 1 }])

        expect(stringToVariations('1-50,2-178,')).toStrictEqual([{ price: 50, value: 1 }, { price: 178, value: 2 }])
        // console.table(stringToVariations('10,2-178,'))
        expect(stringToVariations('10,2-178,')).toStrictEqual([{ price: 178, value: 2 }])
        expect(stringToVariations('85-8-8-10,2-178,')).toStrictEqual([{ price: 178, value: 2 }])
        expect(stringToVariations('85-8-8-10,2--178,')).toStrictEqual([])
        expect(stringToVariations('85-8-8-10,2-8-178,')).toStrictEqual([])
        expect(stringToVariations('5   -  6 ,2  - 8-178,')).toStrictEqual([{ price: 6, value: 5 }])
        expect(stringToVariations('-5   -  6 ,2  - 8-178,')).toStrictEqual([])

    })

it(
    'variationtostring', () => {
        expect(variationsToString([{ price: 50, value: 1 }, { price: 178, value: 2 }])).toStrictEqual('1-50,2-178')
        expect(variationsToString([])).toStrictEqual('')
        expect(variationsToString(null)).toStrictEqual('')
        expect(variationsToString(undefined)).toStrictEqual('')
    })

it(
    'isValidVariation', () => {
        expect(isValidVariation('40=5')).toBe(false)
        expect(isValidVariation('')).toBe(false)
        expect(isValidVariation('405')).toBe(false)
        expect(isValidVariation('4-5')).toBe(true)
    })
