// Convert A Firebase Database Snapshot/Collection To An Array In Javascript https://ilikekillnerds.com/2017/05/convert-firebase-database-snapshotcollection-array-javascript/
export const snapshotToArray = (snapshot: any) => Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }))
