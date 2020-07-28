import * as Ajv from "ajv"

// https://github.com/YousefED/typescript-json-schema
// yarn add --dev typescript-json-schema
// TypeScript の Type 定義から JSON Schema を生成するライブラリ

// https://github.com/ajv-validator/ajv
// yarn add ajv
// JSON Schema から validate 関数を生成するライブラリ

// 生成した JSON Schema なファイルを import してる
import * as schema from "../../schema/schemaOrder.json"

type Sales = {
  id: string
  price: number
}

const validate = (object: unknown): void => {
  const ajv = new Ajv()
  const validateOrder = ajv.compile(schema)
  if (validateOrder(object)) {
    const sales = object as Sales
    console.log(sales.id, sales.price)
  } else {
    console.log(validateOrder.errors)
  }
}

{
  // 成功な例
  const objectA = {
    id: "hfdkslfjiejfl",
    price: 3980,
  }
  validate(objectA)

  // エラーになる例、具体的なエラーメッセージを用意してくれている
  validate(0)
  validate("")
  validate(null)
  validate(undefined)
  validate({ id: "fdsafff" }) // 足りないのはエラー
  validate({ id: 123456789 }) // 型が違うのはエラー
  validate({ id: "fjdkjfd", price: 4980, age: 39 }) // 余分なのでエラー
}

export {}
