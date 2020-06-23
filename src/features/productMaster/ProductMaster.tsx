import { setAlert } from '../alert/alertSlice'
import React, { useEffect } from 'react'

import { ProductModel, } from '../../api/models/ModelProduct'

import { ModelCategoryList } from '../../api/models/ModelCategory'
import { CategoryApi } from '../../api/databaseApi/categoryApi'
import { Loader } from '../../features/loader/Loader'
import Product, { ProductModelMeta } from '../../components/product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { selectProductMaster, updateState, testState, ProductMasterState, addProduct, addProductsToDB, addNewProduct } from './productMasterSlice'
import { isListEmpty, isListNotEmpty } from '../../utils/tsUtils'
import { Button } from 'react-bootstrap'
import './om.css'
import { type } from 'os'

interface Props {
    product: ProductModel,
    catlist: ModelCategoryList
}


export const ProductMaster = () => {
    const temps = useSelector(selectProductMaster)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(updateState(testState))
    }, [])

    const pd: ProductMasterState = {
        inCorrect: [...temps.inCorrect],
        pending: [...temps.pending]
    }


    if (pd.inCorrect.length + pd.pending.length === 0) {
        return wrap(<h1>It seems you have added all your products. In case you would like make your store more versatile you may wish to use product importer</h1>)

    }

    function submit() {
        addProductsToDB(pd, dispatch)
        // dispatch(updateState(pd))
    }



    const api = new CategoryApi()

    function createButtons() {
        return <div>
            <Button className='mx-2' variant="outline-primary" onClick={() => addNewProduct(dispatch)}>Add Product</Button>
            <Button variant="outline-primary" onClick={() => setAlert({ msg: 'NotImplemented', type: 'info' }, dispatch)}>Import Products</Button>
        </div>

    }

    function wrap(params: JSX.Element) {
        return <div className='text-center container m-2'> {createButtons()}
            {params}
        </div>
    }

    return (
        <div>
            <Loader operation={api.getDataCollection} onSuccess={(c) => {
                return <div className='text-center container m-2'>

                    {createButtons()}

                    {isListNotEmpty(pd.inCorrect) &&
                        <div><h1>'Products whose details are in correct :-'</h1>{
                            pd.inCorrect.map((p, index) => {
                                const onChange = (p: ProductModelMeta) => {
                                    pd.inCorrect[index] = p
                                }
                                return (<div className='border border-danger'>
                                    <Product onChange={onChange} product={p} categorylist={c} />
                                </div>)
                            })
                        }</div>}
                    {isListNotEmpty(pd.pending) &&
                        <div><h1>'Products pending to be published'</h1>
                            {
                                pd.pending.map((p, index) => {
                                    const onChange = (p: ProductModelMeta) => {
                                        pd.pending[index] = p
                                    }
                                    return (<Product onChange={onChange} product={p} categorylist={c} />)
                                })
                            }</div>
                    }
                </div>


                // TODO solve onsucess called twice use to reproduce console.count('onSuccess')
                // return <Product onChange={productChanged} product={product} categorylist={c} />
            }} />
            <div className="fab-container" onClick={submit}>
                <div className="fab fab-icon-holder">
                    <i className="fas fa-check" />
                </div>
            </div>
        </div>

    )
}

export default ProductMaster