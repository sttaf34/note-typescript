// developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map

// 基本
const mapA = new Map<string, number>()
mapA.set("keyA", 777)
mapA.set("keyB", 888)
console.log(mapA.get("keyA"))

// 反復・セットするときと引数の順番が異なる
// https://stackoverflow.com/questions/33110709/
mapA.forEach((value, key) => {
  console.log(`${key} => ${value}`)
})

// キーのみを配列にする
const keys: IterableIterator<string> = mapA.keys()
const keyA = Array.from(keys).find((key) => key === "keyA")
console.log(keyA)

// 番目を特定
const index = Array.from(mapA.keys()).findIndex((aKey) => aKey === "keyB")
console.log("index =>", index)

// キーで指定して削除
mapA.delete("keyA")
console.log(mapA)

// 有無チェック
console.log(mapA.has("keyB"), mapA.has("keyC"))

// キーでソートしたいと思った場合
const mapB = new Map<number, string>()
mapB.set(3, "333")
mapB.set(1, "111")
mapB.set(5, "555")
mapB.set(10, "1010")
const sorted: [number, string][] = Array.from(mapB.entries()).sort((a, b) => {
  return a[0] > b[0] ? 1 : -1
})
const newMap = new Map(sorted)
console.log(newMap)

export {}
