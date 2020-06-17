// Dont destruce the make true copies

const ob = { namea: "aa", karm: "raksha" }
var { karm, namea } = ob
// console.log({ ob, namea })
// namea = '1'
// console.log({ ob, namea })
ob.namea = '2'
console.log({ ob, namea })
export { }