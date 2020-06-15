import * as functions from 'firebase-functions'
import * as fa from 'firebase-admin'
// import * as  serviceAccount from '';
// let serviceAccount = require('./serviceAccountKey.json')
import firebaseAccountCredentials from './serviceAccountKey.json'
const serviceAccount = firebaseAccountCredentials as fa.ServiceAccount

console.log(serviceAccount)
fa.initializeApp({
    credential: fa.credential.cert(serviceAccount)
}
)
const fs = fa.firestore()

fs.doc('product/00ZQoILbGstkvy7HsG0ABddsws').create({ 'somedata': 'const fs = fa.firestore()' })


export const helloWorld = functions.https.onRequest((req, res) => {

    return fs.doc('product/00ZQoILbdGtkvy7HG0ABw').get().then((doc) => {
        res.send(doc.data())
    }).catch((err) => {
        console.log(err)
        console.trace(err)
        res.status(500).send(`We have some error buddy${err}`)
    })

})
