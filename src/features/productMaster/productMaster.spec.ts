
import { initalReducerState, stateUpdate } from '../../utils/reducertestutils'
import productMasterReducer, { initialState, updateState, ProductMasterState, addProduct } from './productMasterSlice'
import { data } from '../../api/databaseApi/data'
import { ProductModelMeta } from '../../components/product/Product'
import { isValidProduct, isAnyEmpty, defaultProduct, purifyState, getDefaultProduct } from './productMasterSliceUtils'
import { CorrectProduct } from '../../stories/ProductDemos'


describe('Product Master test', () => {

    const ps: ProductModelMeta[] = data.products.map((p) => ({
        product: p
    }))

    it('should handle initial state', () => {
        initalReducerState(initialState, productMasterReducer)
    })



    it('should handle update state', () => {

        const updatedState: ProductMasterState = { ...initialState, pending: ps }
        const payload = { type: updateState.type, payload: updatedState }

        stateUpdate(initialState, updatedState, payload, productMasterReducer)
    })

    it('should handle add product', () => {
        const updatedState: ProductMasterState = { ...initialState, pending: [defaultProduct, ...initialState.pending] }
        const payload = { type: addProduct.type, }
        stateUpdate(initialState, updatedState, payload, productMasterReducer)
    })

    it('isAnyEmpty test ', () => {
        expect(isAnyEmpty(['   ', '2', '3'])).toBeTruthy()
        expect(isAnyEmpty(['  1  ', '2', '3'])).toBeFalsy()
        expect(isAnyEmpty(['              '])).toBeTruthy()
    })



    var corectproduct: ProductModelMeta = {
        imageFile: undefined,
        product: {
            subcategory: "Pulses",
            unit: 'g',
            variations: [
                {
                    price: 70,
                    value: 20
                }, {
                    price: 90,
                    value: 30
                }
            ],
            productimage: undefined,
            sid: undefined,
            id: undefined,
            category: "Grocery & Staples",
            title: "Arhar",

        }
    }

    it('isValidProduct test ', () => {

        expect(isValidProduct(corectproduct)).toBeTruthy()
        expect(isValidProduct({ ...corectproduct, product: { ...corectproduct.product, subcategory: '      ' } })).toBeFalsy()
        expect(isValidProduct({ ...corectproduct, product: { ...corectproduct.product, title: '      ' } })).toBeFalsy()
        expect(isValidProduct({ ...corectproduct, product: { ...corectproduct.product, title: '      ', variations: [] } })).toBeFalsy()
        expect(isValidProduct({ ...corectproduct, product: { ...corectproduct.product, title: '      ', variations: [], unit: '   ' } })).toBeFalsy()



    })
    it('getproduct test', () => {
        expect(isValidProduct(getDefaultProduct())).toBeFalsy()

        expect(isValidProduct({ ...getDefaultProduct(), product: { ...corectproduct.product, title: 'Apple', variations: [{ price: 5, value: 4 }], unit: ' g ', category: '-', subcategory: '=', } })).toBeTruthy()
        expect(isValidProduct({ ...getDefaultProduct(), product: { ...corectproduct.product, title: '   ', variations: [{ price: 5, value: 4 }], unit: ' g ', category: '-', subcategory: '=', } })).toBeFalsy()
    })
    it('purifyState test ', () => {
        expect(purifyState({ inCorrect: [{ product: { ...corectproduct.product, title: '      ', variations: [], unit: '   ' } }, { ...corectproduct }], pending: [{ ...corectproduct }] }).pending.length).toBe(2)
        expect(purifyState({ inCorrect: [{ product: { ...corectproduct.product, title: '      ', variations: [], unit: '   ' } }, { ...corectproduct }], pending: [{ ...corectproduct }] }).inCorrect.length).toBe(1)
        expect(purifyState({ inCorrect: [], pending: [{ product: { ...corectproduct.product, title: '      ', variations: [], unit: '   ' } },] }).inCorrect.length).toBe(1)
        expect(purifyState({ inCorrect: [], pending: [{ product: { ...corectproduct.product, title: '      ', variations: [], unit: '   ' } },] }).pending.length).toBe(0)
        expect(purifyState({ inCorrect: [{ ...corectproduct }, { ...corectproduct }], pending: [{ ...corectproduct }] }).pending.length).toBe(3)

    })

    it('filterProduct test ', () => {
        var p: ProductModelMeta = {
            product: {
                subcategory: "Pulses",
                unit: 'kg',
                variations: [
                    {
                        price: 70,
                        value: 20
                    }, {
                        price: 90,
                        value: 30
                    }
                ],
                productimage: "https://picsum.photos/id/237/200/300",
                category: "Grocery & Staples",
                title: "Arhar",
                sid: '1',
                id: '1'
            },
            imageFile: 'ss'
        }

        expect(isValidProduct(p)).toBeTruthy()
        const p1 = { ...p }
        p1.product.category = '    '
        expect(isValidProduct(p1)).toBeFalsy()
        const p2 = { ...p }
        p2.product.variations = []
        expect(isValidProduct(p2)).toBeFalsy()

        const p3 = { ...p }
        p3.product.unit = '           '
        expect(isValidProduct(p3)).toBeFalsy()
    })
})