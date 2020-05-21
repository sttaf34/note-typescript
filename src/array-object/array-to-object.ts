// 配列から各要素をキーにしてのオブジェクト化
const fruits = ["apple", "orange", "grape"]
const data: { [key: string]: string } = {}
fruits.forEach((fruit) => {
  data[fruit] = ""
})
console.log(data)

// もうちょっと良い書き方がありそう

export {}
