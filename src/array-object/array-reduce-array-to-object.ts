{
  type StringObject = { [key: string]: string }

  // 配列の各要素の値をキーにしたオブジェクトを生成
  const fruits = ["apple", "orange", "banana"]
  const initialValue: StringObject = {}
  const result: StringObject = fruits.reduce(
    (previousValue, currentValue): StringObject => {
      const copiedObject = { ...previousValue }
      copiedObject[currentValue] = currentValue
      return copiedObject
      // 一週目
      // previousValue => {}, currentValue => "apple"
      // 二週目
      // previousValue => { "apple": "apple" } 一周目の計算結果
      // currentValue => "orange"
    },
    initialValue
  )
  console.log(result)

  // 配列から各要素をキーにしてのオブジェクト化・素朴で分かりやすいかも
  const data: { [key: string]: string } = {}
  fruits.forEach((fruit) => {
    data[fruit] = ""
  })
  console.log(data)
}

{
  // 配列の各要素の値をキーにしたオブジェクトを生成
  // キーに用いる型を string を限定した型にしたい場合

  type Key = "keyA" | "keyB" | "keyC"
  const keys: Key[] = ["keyA", "keyB", "keyC"]
  const initialValue: { [key in Key]?: string } = {}

  const result: { [key in Key]?: string } = keys.reduce(
    (previousValue, currentValue): { [key in Key]?: string } => {
      const copiedObject = { ...previousValue }
      copiedObject[currentValue] = currentValue
      return copiedObject
    },
    initialValue
  )
  console.log(result)
}

export {}
