/* eslint-disable no-restricted-syntax */

// オブジェクト生成
const aDictionary: { [key: string]: string } = { keyA: "AAAA" }
aDictionary.keyB = "BBBB"
aDictionary.keyC = "CCCC"

const keyAndValues: [string, string][] = Object.entries(aDictionary)
for (const [key, value] of keyAndValues) {
  console.log(key, value)
}

export {}
