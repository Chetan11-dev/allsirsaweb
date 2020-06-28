// import { queryFirestore } from 'firewings'

import firebase from './src/api/services/firebase'
import { data } from './src/api/databaseApi/data'
import { ModelCategoryList } from './src/api/models/ModelCategory'
import { Api } from './src/api/services/Api';




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


