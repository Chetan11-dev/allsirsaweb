import * as React from 'react'
import { ProductModel, VariationModel } from '../../api/models/ModelProduct'
import { Dropdown, DropdownButton, Form } from 'react-bootstrap'

import { ModelCategoryList, ModelCategory } from '../../api/models/ModelCategory'
// import { timer } from '../../features/loader/loader.spec'
import { useState } from 'react'
import { stringToVariations, variationsToString } from './variation'

import { ct, snapshottoarray, toJsStr, beautify, logo, logt } from '../../utils/logutils'
import { actionsData } from '../../stories/Nav'
// import { product } from './ProductComponent'
export interface ProductModelMeta {
    product: ProductModel,
    imageFile?: any
}

interface Props {
    product: ProductModelMeta,
    categorylist: ModelCategoryList,
    onChange: (model: ProductModelMeta) => void
}

interface meta {
    currentCategory: ModelCategory,
    categories: string[],
    currentSubCategory: string

}

const units = ['g', 'kg', 'ml', 'l']

interface EventTarget {
    name: string,
    value: string

}

function getMeta(currstate: ProductModel, categorylist: ModelCategoryList) {
    const st = {
        currentCategory: findCategory(currstate.category, categorylist.categories),
        categories: categoriesToStrings(categorylist.categories),
        currentSubCategory: findSubCategory(currstate.subcategory, findCategory(currstate.category, categorylist.categories)),
    }
    return { ...st }
}

function makeDropDowns(p: string[], defaultValue: string, classes: string, onSelect: (event: string) => void) {
    return <div className={classes}>
        <DropdownButton onSelect={onSelect} id="dropdown-basic-button" title={defaultValue}>
            {p.map((v, index) => <Dropdown.Item key={index} eventKey={v}  >{v}</Dropdown.Item>)}
        </DropdownButton>
    </div>
}

export const title = 'title', variations = 'variations', variationsBadges = 'variationsBadges', category = 'category', subcategory = 'subcategory', unit = 'unit'

const Product = (props: Props) => {

    const { product, categorylist, onChange } = props

    const [state, setState] = useState(product)

    const [variationString, setVariationString] = useState(variationsToString(state.product.variations))

    const [meta, setmeta] = useState<meta>(getMeta(state.product, categorylist))



    // To autocorrect products
    if (meta.currentCategory.name !== state.product.category || meta.currentSubCategory !== state.product.subcategory) {
        stateChangeHandler({ ...state, product: { ...state.product, subcategory: meta.currentSubCategory, category: meta.currentCategory.name } })
    }
    // To autocorrect units
    if (!units.includes(state.product.unit)) {
        stateChangeHandler({ ...state, product: { ...state.product, unit: units[0] } })
    }

    function handleChange(e: EventTarget) {
        const { name, value } = e


        switch (name) {
            case title:
                stateChangeHandler({ ...state, product: { ...state.product, title: value } })
                break

            case variations:
                setVariationString(value)
                stateChangeHandler({ ...state, product: { ...state.product, variations: stringToVariations(value) } })

                break

            case category:
                const ns = { ...state, product: { ...state.product, category: value } }
                stateChangeHandler(ns)
                setmeta(getMeta(ns.product, categorylist))
                break

            case unit:
                stateChangeHandler({ ...state, product: { ...state.product, unit: value } })
                break

            case subcategory:
                const st = stateChangeHandler({ ...state, product: { ...state.product, subcategory: value } })
                setmeta(getMeta(st.product, categorylist))
                break

            default: console.error(`Invalid formevent ${e}`)
                break
        }

    }

    function stateChangeHandler(state: ProductModelMeta) {
        setState(state)
        return state

    }
    onChange(state)
    

    return (
        <div className="mt-2 col text-center" >
            <div className="container text-center ">
                <i className="far fa-images a bg-light p-2 mb-2" style={{
                    fontSize: '90px'
                }}></i>
            </div>

            <Form>
                <Form.Group >
                    <Form.Control data-test={title} name={title} value={state.product.title} onChange={(e) => handleChange(getEventTarget(e))} placeholder="Add Product Title" />
                </Form.Group>
                <Form.Group>
                    <Form.Control data-test={variations} placeholder="Add Variations" name={variations} onChange={(e) => handleChange(getEventTarget(e))} value={variationString} />
                    <small className='ml-1'>Eg. 1-50 means 1{state.product.unit} at 50 Rs</small>
                </Form.Group>
            </Form>
            <div data-test={variationsBadges} >
                {variationToBadges(state.product.variations, state.product.unit)}</div>
            {makeDropDowns(units, state.product.unit, '', (value) => handleChange({ value, name: unit }))}
            {makeDropDowns(meta.categories, state.product.category, 'p-3', (value) => handleChange({ value, name: category }))}
            {makeDropDowns(meta.currentCategory.subcategories, state.product.subcategory, '', (value) => handleChange({ value, name: subcategory }))}
            <hr />
        </div>

    )
}

export default Product

function findCategory(param: string, cats: ModelCategory[]) {

    const foundCategory = cats.find((v) => v.name === param)

    if (foundCategory) {
        return foundCategory
    } else {
        return cats[0]
    }
}

function findSubCategory(param: string, cat: ModelCategory) {
    const foundCategory = cat.subcategories
        .find((v) => v === param)
    if (foundCategory) {
        return foundCategory
    } else {
        return cat.subcategories[0]
    }
}

function variationToBadges(params: VariationModel[], unit: string) {
    // Should not use array index as key but it is resonable here
    return params.map((v, index) => (<span key={index} className="m-2 badge badge-pill badge-light">{`${v.value}${unit} at ${v.price}`}</span>))
}

function categoriesToStrings(params: ModelCategory[],) {
    return params.map(v => v.name)
}
function getEventTarget(event: React.ChangeEvent<any>): EventTarget {
    const { name, value } = event.target
    return { name, value }
}