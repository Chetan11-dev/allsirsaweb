import { appname } from '../utils/apputils'
import React from 'react'
import { makeAction } from '../utils/storybookutils'
import { action } from '@storybook/addon-actions'
import { Order } from './../components/order/order'

// import {  } from '../features/productMaster/ProductMaster';

import { data } from './../api/databaseApi/data'
import { beautify } from '../utils/logutils'
import { ModelOrder } from './../api/models/ModelOrder'




const actionsData = { order: action('order') }

function orderChanged(p: ModelOrder) {
    actionsData.order(beautify(p))
}


export const DefaultOrder = () => {
    return (
        <Order order={data.orders[0]} onChange={orderChanged} />
    )
}


