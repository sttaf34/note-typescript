// オブジェクト生成
// new Object({ id: 1, firstName: "AAA" } と一緒
const userA = { id: 1, firstName: "AAA" }
console.log(userA)

// 変数名とキー名が同じであれば、省略して生成できる
const firstName = "CCC"
const userC = { id: 1, firstName }
console.log(userC)

// const で宣言しているがオブジェクトの中の値の変更ができる
userC.id = 123
console.log(userC)

// readonly にすればオブジェクトの中の値の変更はできなくなる
const userD: { readonly name: string } = { name: "DDD" }
// userD.name = "EEE" // readonly しているので警告になる
console.log(userD)

// JavaScriptには連想配列はない（オブジェクトをそれっぽく使ってるだけ）
// TypeScriptだと、連想配列っぽく見える書き方ができる（他にマップもある）
const aDictionary: { [key: string]: string } = { keyA: "valueA" }
aDictionary.keyB = "BBBB"
console.log(aDictionary)

// { [key: string]: string } の構文はインデックスシグネチャと呼ばれ、
// aDictionary にはキーが追加できる
// 比較として userC にはキーが追加できない

// 空オブジェクトを定義
const empty = {}
console.log(empty)
console.log(Object.keys(empty).length === 0) // 空オブジェクト判定

export {}
