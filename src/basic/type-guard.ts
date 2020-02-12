// Typescript が書き方に応じて型を制限してくれる様子
// 自分で定義する type guard 関数は、json-to-object-by-type-guard.ts にある

class Item {
  public name = "paper"

  public weight = 55
}

const getString = (something: string | number | boolean | Item): string => {
  // 各箇所のsomethingにカーソルを当てると、型が絞られている様子が確認できる
  // 条件式の中のsomethingも上の方の処理に応じて、型が絞られている
  if (typeof something === "string") {
    return something
  }
  if (typeof something === "number") {
    return String(something)
  }
  if (typeof something === "boolean") {
    return String(something)
  }
  if (something instanceof Item) {
    return something.name
  }
  return ""
}
getString(3)

const getNumberOrNull = (something: number | null | undefined): number => {
  // typeof null      -> "object"
  // typeof undefined -> "undefined"
  const result = typeof something
  console.log(`typeof something -> ${result}`)

  if (something === null) {
    console.log(something)
    return 1
  }
  if (something === undefined) {
    console.log(something)
    return 2
  }
  return something * 2
}
getNumberOrNull(null)
getNumberOrNull(undefined)
