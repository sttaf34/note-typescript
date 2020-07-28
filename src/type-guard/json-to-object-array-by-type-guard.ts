/* eslint-disable @typescript-eslint/ban-types */

// 一番外側が配列なJSON文字列をオブジェクトにする時の安全な取り扱い
// type-guard-nullalbe-array.ts と同じような話だった
interface Fruit {
  name: string
}

const isFruit = (item: {}): item is Fruit => {
  return "name" in item
}

const getFruitsGood = (jsonString: string): Fruit[] => {
  // エラー処理は省略、JSON としては正しいものが渡ってきているとする
  const object = JSON.parse(jsonString)

  if (Array.isArray(object)) {
    // filter に Type Guard 関数だけを渡すと、
    // 返り値の型がちゃんと認識されたものになってくれる
    const fruits = object.filter(isFruit)
    return fruits
  }
  return []
}

const getFruitsBad = (jsonString: string): Fruit[] => {
  // エラー処理は省略、JSON としては正しいものが渡ってきているとする
  const object = JSON.parse(jsonString)

  if (Array.isArray(object)) {
    // 余計な書き方をすると、型を認識してくれない
    const result = object.filter((eachObject) => {
      return isFruit(eachObject)
    })
    return result as Fruit[] // やむを得ずキャストを使うはめに・・・
  }
  return []
}

console.log(getFruitsGood('[{"name": "apple"}, {"name": "orange"}]'))
console.log(getFruitsGood('[{"key": "12299"},  {"name": "orange"}]'))

// 関数の中の実装が余分なところがあるが、動作は一緒
console.log(getFruitsBad('[{"name": "apple"}, {"name": "orange"}]'))
console.log(getFruitsBad('[{"key": "12299"},  {"name": "orange"}]'))

export {}
