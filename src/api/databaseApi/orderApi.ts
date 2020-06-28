// import { queryFirestore } from 'firewings'

import firebase from '../services/firebase'
import { data } from './data'
import { ModelCategoryList } from '../models/ModelCategory'
import { Api } from './../services/Api';




export class OrderApi  extends Api{

  
    constructor() {
    super('orders')
         }
     
    async getOrderCollection(){
        // TODO: Get data from firestore 
        // const query = await this.ref.doc('NUTm8fuwuSyBfBtTQvtN').get()
        // const data = query.data()
        return data.orders 
    }
}


