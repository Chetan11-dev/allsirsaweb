import React from 'react'
import { makeAction } from '../utils/storybookutils'
import { action } from '@storybook/addon-actions'

export const DefaultOrder = () => {
    actionsData.order('sssssss')
    return (
        <div>

        </div>
    )
}

const actionsData = { order: action('order') }

export default {
    title: 'Order'
}
