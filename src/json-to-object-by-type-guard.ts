// JSON文字列からオブジェクトにする時の安全な取り扱い

interface Fruit {
  name: string
  isSweet: boolean
}

interface Vegetable {
  name: string
  isDelicious: boolean
}

// 自分達で定義する Type Guard 用関数
const isFruit = (item: {}): item is Fruit => {
  return "name" in item && "isSweet" in item
}

const isVegetable = (item: {}): item is Vegetable => {
  return "name" in item && "isDelicious" in item
}

const consoleLogSafety = (jsonString: string): void => {
  let object = {}
  try {
    object = JSON.parse(jsonString)
  } catch {
    console.log("正しいJSON文字列ですか？")
    return
  }
  if (Object.keys(object).length === 0) {
    console.log("空っぽです")
  } else if (isFruit(object)) {
    // Type Guard 関数でチェックしているので、
    // VSCode 上で object にカーソルを持ってくと型が限定されている
    // もしくは、⌘Ｋ⌘Ｉ（＾Ｋ＾Ｉ）
    console.log(object.name, object.isSweet)
  } else if (isVegetable(object)) {
    console.log(object.name, object.isDelicious)
  } else {
    console.log("未知のオブジェクトです")
  }
}

consoleLogSafety('{"name": "japan", "isS": tru')
consoleLogSafety('{"name": "apple", "isSweet": true}')
consoleLogSafety('{"name": "okra", "isDelicious": true}')
consoleLogSafety('{"name": "coffee", "isBitter": true}')
consoleLogSafety("")
consoleLogSafety("{}")
