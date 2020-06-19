import React, { useEffect } from 'react'

import { ProductModel, } from '../../api/models/ModelProduct'

import { ModelCategoryList } from '../../api/models/ModelCategory'
import { CategoryApi } from '../../api/databaseApi/categoryApi'
import { Loader } from '../../features/loader/Loader'
import Product, { ProductModelMeta } from '../../components/product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { selectProductMaster, updateState, testState, ProductMasterState } from './productMasterSlice'
import { isListEmpty, isListNotEmpty } from '../../utils/tsUtils'


interface Props {
    product: ProductModel,
    catlist: ModelCategoryList
}

export const product: ProductModelMeta = {
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
    }
}

// export function productChanged(p: ProductModelMeta) {
//     product = p
// }



export const ProductMaster = () => {
    const temps = useSelector(selectProductMaster)
    const pd: ProductMasterState = {
        inCorrect: [...temps.inCorrect],
        pending: [...temps.pending]
    }


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(updateState(testState))
    }, [])

    if (pd.inCorrect.length + pd.pending.length === 0) {
        return <h1>It seems you have added all your products. In case you would like make your store more versatile you may wish to use product importer</h1>
    }

    const api = new CategoryApi()

    return (
        <div>
            <Loader operation={api.getDataCollection} onSuccess={(c) => {

                const ls: JSX.Element[] = []

                if (isListNotEmpty(pd.inCorrect)) {
                    const inc = 'Products whose details are inCorrect :-'
                    const e = <h1>{inc}</h1>
                    ls.push(e)
                    const ps = pd.inCorrect.map((p, index) => {
                        const onChange = (p: ProductModelMeta) => {
                            pd.pending[index] = p
                        }
                        return (<Product onChange={onChange} product={p} categorylist={c} />)
                    })
                    ls.push(...ps)
                }

                if (isListNotEmpty(pd.pending)) {
                    // const inc = 'Products whose details are inCorrect :-'
                    // const e = <h1>{inc}</h1>
                    ls.push(<div className='m-4'></div>)
                    const ps = pd.inCorrect.map((p, index) => {
                        const onChange = (p: ProductModelMeta) => {

                        }
                        return (<Product onChange={onChange} product={p} categorylist={c} />)
                    })
                    ls.push(...ps)
                }

                return <div>{ls}</div>
                // TODO solve onsucess called twice use to reproduce console.count('onSuccess')
                // return <Product onChange={productChanged} product={product} categorylist={c} />
            }} />
        </div>

    )
}

export default ProductMaster