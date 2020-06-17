import beautifyy from 'js-beautify'
// Convert A Firebase Database Snapshot/Collection To An Array In Javascript https://ilikekillnerds.com/2017/05/convert-firebase-database-snapshotcollection-array-javascript/
export const snapshotToArray = (snapshot: any) => Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }))
export const toJsStr = (data: any) => JSON.stringify(data)

export const beautify = (data: any) => beautifyy(toJsStr(data), { indent_size: 2, space_in_empty_paren: true })

export const log = (data: any) => console.log(data)
export const logo = (data: any) => console.log(beautifyy(toJsStr(data), { indent_size: 2, space_in_empty_paren: true }))
export const logt = (data: any) => console.trace(beautifyy(toJsStr(data), { indent_size: 2, space_in_empty_paren: true }))





