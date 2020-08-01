import * as Ajv from "ajv"

// 生成した JSON Schema なファイルを import してる
import * as schema from "../../schema/schemaMagazine.json"

// 階層構造でも大丈夫だった
import { Magazine } from "./types"

const validate = (object: unknown): void => {
  const ajv = new Ajv()
  const validateMagazine = ajv.compile(schema)
  if (validateMagazine(object)) {
    const magazine = object as Magazine
    console.log("OK => ", magazine.title)
  } else {
    console.log(validateMagazine.errors)
  }
}

{
  // 成功な例
  const magazineA = {
    title: "すごい雑誌",
    pages: [
      { index: 1, body: "吾輩は" },
      { index: 2, body: "猫である" },
    ],
  }
  validate(magazineA)

  const magazineB = {
    title: "おもしろい雑誌",
    pages: [],
  }
  validate(magazineB)
}

export {}
