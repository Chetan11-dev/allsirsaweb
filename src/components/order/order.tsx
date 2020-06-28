import React from 'react'
import { ModelOrder } from './../../api/models/ModelOrder';
import { beautify } from './../../utils/logutils';
interface Props {
    order : ModelOrder , onChange:(m:ModelOrder) => void 
}
export const Order = ({onChange , order}:Props ) => {
    
    return (
        <div>
            {beautify(order)}
        </div>
    )
}
