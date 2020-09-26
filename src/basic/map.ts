// developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map

// 基本
const mapA = new Map<string, number>()
mapA.set("keyA", 777)
mapA.set("keyB", 888)
console.log(mapA.get("keyA"))

// 反復
mapA.forEach((key, value) => {
  console.log(`${key} => ${value}`)
})

// キーのみを配列にする
const keys: IterableIterator<string> = mapA.keys()
const keyA = Array.from(keys).find((key) => key === "keyA")
console.log(keyA)

// キーで指定して削除
mapA.delete("keyA")
console.log(mapA)

// 有無チェック
console.log(mapA.has("keyB"), mapA.has("keyC"))

export {}
