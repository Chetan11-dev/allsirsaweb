import * as React from 'react'
import { ProductModel, VariationModel } from '../../api/models/ModelProduct'
import { Dropdown, DropdownButton, Form } from 'react-bootstrap'

import { ModelCategoryList } from '../../api/models/ModelCategory'
// import { timer } from '../../features/loader/loader.spec'
import { useState } from 'react'
import { stringToVariations, variationsToString } from './variation'
interface Props {
    product: ProductModel,
    categorylist: ModelCategoryList,
    onChange: (model: ProductModel) => void
}
const title = 'title', variations = 'variations'

const Product = (props: Props) => {

    const { product } = props

    const [state, setState] = useState(props.product)

    const [variationString, setVariationString] = useState(variationsToString(product.variations))



    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target

        if (name === 'title') {
            state.title = value
            console.log(state.title)
        } else if (name === 'variations') {
            state.variations = stringToVariations(value)
            setVariationString(value)
        }
        const st = { ...state }
        props.onChange(st)
        setState(st)
    }


    // function changeDropdown(){
    //     if (is category) {
    //         change categry and update categorylist
    //     } else {
    //         change subcategory
    //     }
    // }

    function variationToBadges(params: VariationModel[], unit: string) {
        // Should not use array index as key but it is resonable here
        return params.map((v, index) => (<span key={index} className="m-2 badge badge-pill badge-light">{`${v.value}${unit} at ${v.price}`}</span>))
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
                    <Form.Control name={title} value={state.title} onChange={handleChange} placeholder="Add Product Title" />
                </Form.Group>
                <Form.Group >
                    <Form.Control placeholder="Add Variations" name={variations} onChange={handleChange} value={variationString} />
                    <small className='ml-1'>Eg. 1-50 means 1{'g'} at 50 Rs</small>
                </Form.Group>
            </Form>

            {variationToBadges(state.variations, state.unit)}


            <DropdownButton className='py-3' id="dropdown-basic-button" title="Unit">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton className='py-3' id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>


        </div>

    )
}

export default Product