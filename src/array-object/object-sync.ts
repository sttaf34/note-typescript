// 丸ごと代入するのは無しで objectA を objectB に同期する

const objectA: { [key: string]: number } = {
  "2020-07-10": 35, // objectA と objectB で値が異なる
  "2020-07-11": 77, // objectA と objectB で値が同一
  "2020-07-12": 55, // objectA にのみ存在
}
const objectB: { [key: string]: number } = {
  "2020-07-09": 11, // objectB にのみ存在
  "2020-07-10": 22, // objectA と objectB で値が異なる
  "2020-07-11": 77, // objectA と objectB で値が同一
}

const objectAKeys = Object.keys(objectA)
const objectBKeys = Object.keys(objectB)

// objectB にだけ存在するキーの場合は除去
const onlyObjectBKeys = objectBKeys.filter(
  (objectBKey) => !objectAKeys.includes(objectBKey)
)
onlyObjectBKeys.forEach((key) => delete objectB[key])
console.log(objectB)

// 両方に存在するキーの場合は上書き
const bothKey = objectAKeys.filter((objectAKey) =>
  objectBKeys.includes(objectAKey)
)
bothKey.forEach((key) => {
  objectB[key] = objectA[key]
})
console.log(objectB)

// objectA にだけ存在するキーの場合は追加
const onlyObjectAKeys = objectAKeys.filter(
  (objectAKey) => !objectBKeys.includes(objectAKey)
)
onlyObjectAKeys.forEach((key) => {
  objectB[key] = objectA[key]
})
console.log(objectB)

export {}
