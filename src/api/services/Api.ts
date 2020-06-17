import firebase from './firebase'


export class Api {

    ref: firebase.firestore.CollectionReference

    constructor(path: string) {
        this.ref = firebase.firestore().collection(path)
    }

    getDataCollection() {
        return this.ref.get()
    }
    async deleteCollection() {

        const coll = await this.getDataCollection()
        await Promise.all(
            coll.docs.map((v) =>
                v.ref.delete()
            ))
    }

    streamDataCollection() {
        return this.ref.onSnapshot
    }



}