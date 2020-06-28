// export const actionsData = {
//     onProductChanged: action('onProductChanged'),
//     onVariationChanged: action('onVariationChanged'),
// }

import { createObFromList } from './tsUtils'
import { action } from '@storybook/addon-actions';


export { }

export function makeAction(params:string[]) {
    return createObFromList(params ,(v)=>action(v))    
}

console.log(createObFromList(['ss'] ,(v)=>action(v)))
