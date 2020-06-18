import * as React from 'react'
import { ProductModel, VariationModel } from '../../api/models/ModelProduct'
import { Dropdown, DropdownButton, Form } from 'react-bootstrap'

import { ModelCategoryList, ModelCategory } from '../../api/models/ModelCategory'
// import { timer } from '../../features/loader/loader.spec'
import { useState } from 'react'
import { stringToVariations, variationsToString } from './variation'
import { isString } from 'util'
interface Props {
    product: ProductModel,
    categorylist: ModelCategoryList,
    onChange: (model: ProductModel) => void
}

interface meta {
    currentCategory: ModelCategory,
    categories: string[],
    currentSubCategory: string

}

const units = ['g', 'kg', 'ml', 'l']

function findCategory(param: string, cats: ModelCategory[]) {
    const foundCategory = cats.find((v) => v.name == param)
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

    const [variationString, setVariationString] = useState(variationsToString(product.variations))

    const [meta, setmeta] = useState<meta>(getMeta(state, categorylist))

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {

        const { name, value } = event.target

        if (name === title) {
            state.title = value
            console.log(state.title)
        } else if (name === variations) {
            state.variations = stringToVariations(value)
            setVariationString(value)
        } else console.error(`Invalid formevent ${event}`)
        stateChangeHandler(state)

    }

    function stateChangeHandler(state: ProductModel) {
        const st = { ...state }
        onChange(st)
        setState(st)
        return st
    }


    function handleSubCategoryChange(event: string) {
        state.subcategory = event
        const st = stateChangeHandler(state)
        setmeta(getMeta(st, categorylist))
    }

    function handleUnitChange(event: string) {
        state.unit = event
        stateChangeHandler(state)
    }

    function handleCategoryChange(event: string) {
        state.category = event
        stateChangeHandler(state)
        setmeta(getMeta(state, categorylist))
    }
    return (
        <div className="mt-2 col text-center" >
            <div className="container text-center ">
                <i className="far fa-images a bg-light p-2 mb-2" style={{
                    fontSize: '90px'
                }}></i>
            </div>

            <Form>
                <Form.Group >
                    <Form.Control data-test={title} name={title} value={state.title} onChange={handleChange} placeholder="Add Product Title" />
                </Form.Group>
                <Form.Group>
                    <Form.Control data-test={variations} placeholder="Add Variations" name={variations} onChange={handleChange} value={variationString} />
                    <small className='ml-1'>Eg. 1-50 means 1{state.unit} at 50 Rs</small>
                </Form.Group>
            </Form>
            <div data-test={variationsBadges} >
                {variationToBadges(state.variations, state.unit)}</div>
            {makeDropDowns(units, state.unit, '', handleUnitChange)}
            {makeDropDowns(meta.categories, state.category, 'p-3', handleCategoryChange)}
            {makeDropDowns(meta.currentCategory.subcategories, meta.currentSubCategory, '', handleSubCategoryChange)}
        </div>

    )
}

export default Product