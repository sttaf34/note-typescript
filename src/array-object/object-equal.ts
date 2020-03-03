import deepEqual = require("deep-equal")

// https://typescript-jp.gitbook.io/deep-dive/recap/equality
// オブジェクトの一致を判定しようと思ったとする
const userA = { id: 1, firstName: "AAA" }
const userB = { id: 1, firstName: "AAA" }

// 別インスタンスなので、これらの比較では True にならない
console.log(userA === userB) // false
// eslint-disable-next-line eqeqeq
console.log(userA == userB) // false

// 深い比較がどうしても必要であれば、deep-equal を使う
console.log(deepEqual(userA, userB))

// 場合によっては、これでも良かったりもするかも
console.log(userA.id === userB.id)

// JSON.stringify() による比較は使わない
// https://qiita.com/8x9/items/218e24b7e6eea2446beb
