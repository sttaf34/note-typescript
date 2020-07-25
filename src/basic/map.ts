// developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map

// 基本
const mapA = new Map<string, number>()
mapA.set("keyA", 777)
console.log(mapA.get("keyA"))

// 反復
mapA.forEach((key, value) => {
  console.log(`${key} => ${value}`)
})
