// import { queryFirestore } from 'firewings'

import firebase from '../services/firebase'
import { data } from './data'
import { ModelCategoryList } from '../models/ModelCategory'

export class CategoryApi {

    ref: firebase.firestore.CollectionReference
    constructor() {
        this.ref = firebase.firestore().collection('category')
    }

    async getDataCollection(): Promise<ModelCategoryList> {
        // TODO: Get data from firestore 
        // const query = await this.ref.doc('NUTm8fuwuSyBfBtTQvtN').get()
        // const data = query.data()
        return data.categories
    }
}

