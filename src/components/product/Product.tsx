import { v4 as uuidv4 } from 'uuid'
import { connect, useDispatch, useSelector } from 'react-redux'
import * as React from 'react'
import { setAlert, showAlert, hideAlert, AlertInfo } from '../../features/alert/alertSlice'
import { ProductModel } from '../../api/models/ModelProduct'
import { Dropdown, DropdownButton, Container, Row, CardColumns, Col, Form } from 'react-bootstrap'
import { AppDispatch } from '../../app/store'
import './productstyle.css'
import { queryFirestore } from 'firewings'
import { ModelCategoryList } from '../../api/models/ModelCategory'
import { Loader } from '../../features/loader/Loader'
// import { timer } from '../../features/loader/loader.spec'

interface Props {
    product: ProductModel,
    categorylist?: ModelCategoryList
}

const Product = (props: Props) => {
    const { subcategory, unit, variations, productimage, category, title, sid } = props.product



    return (
        <div className="mt-2 col text-center" >
            <div className="container   text-center ">
                <i className="far fa-images a bg-light p-2 mb-2"  ></i>
            </div>

            <Form>
                <Form.Group >
                    <Form.Control placeholder="Add Product Title" />
                </Form.Group>
                <Form.Group >
                    <Form.Control placeholder="Add Variations" />
                    <small className='ml-1'>Eg. 1-50 means 1{unit} at 50 Rs</small>
                </Form.Group>
            </Form>


            <span className="m-2 badge badge-pill badge-light">1g at 25</span>
            <span className="m-2 badge badge-pill badge-light">1g at 25</span>
            <span className="m-2 badge badge-pill badge-light">1g at 25</span>
            <span className="m-2 badge badge-pill badge-light">1g at 25</span>
            <span className="m-2 badge badge-pill badge-light">1g at 25</span>
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