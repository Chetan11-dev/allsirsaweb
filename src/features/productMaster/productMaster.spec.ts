
import { initalReducerState, stateUpdate } from '../../utils/reducertestutils'
import productMasterReducer, { initialState, updateState, ProductMasterState, addProduct } from './productMasterSlice'
import { data } from '../../api/databaseApi/data'
import { ProductModelMeta } from '../../components/product/Product'
import { isValidProduct, isAnyEmpty, defaultProduct } from './productMasterSliceUtils'


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