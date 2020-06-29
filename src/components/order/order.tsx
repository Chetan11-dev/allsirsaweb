import React from 'react'
import { ModelOrder } from './../../api/models/ModelOrder'
import { beautify } from './../../utils/logutils'
import { Row, Col, Container } from 'react-bootstrap'
import { ModelProduct, ModelVariation } from '../../../ModelProduct';
interface Props {
    order: ModelOrder, onChange: (m: ModelOrder) => void
}


export const Order = ({ onChange, order: { product: { category, variations, unit, subcategory, title, productimage, } } }: Props) => {


    return (
        <div className="container border border-primary ">
            <div className="m-2"><div className="row">
                <div >
                    <img className='h-50 w-50 border border-primary ' src={productimage} alt="" />
                </div>
                <div className="col border border-primary  ">
                    <div className="row justify-content-between m-0 p-0">
                    <h5>{title}</h5>
                    <h5>{title}</h5>
                    {/* <h1>{title}</h1> */}
                        <p>hello</p>
                        <p>hello</p>
                    </div>
                    <div className='row m-0 p-0'>
                        <p>dd</p>
                    </div>
                </div>

            </div>
                <div className="row">
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                </div></div>
        </div>

    )
}

// <div>Hello</div>

// <span>Hello</span>
// <span>Hello</span>
// <div className="row"> <span>Hello</span>
//     <div className="col-12 bg-dark ">.col-6 </div>
// </div>