// オブジェクトなどをJSON文字列に変換
const objectA = { x: 5, y: 6 }
console.log(JSON.stringify(objectA)) // {"x":5,"y":6}

// ' " \ / < > &
// k	θ	a
// ア 𦈢 🍣
// この↑文字列が著名なAPIのJSONでどのようにエスケープされてるか
//
// Gist
// https://api.github.com/gists/6bc592b15433dbd89d21cca47ab9c6f3
// "' \" \\ / < > &  \nk\tθ\ta  \nア 𦈢 🍣"
// - ユニコードエスケープされていない
//
// Hatena
// https://b.hatena.ne.jp/entry/json/https://www.sttaf34.net
// "' \" \\ / < > &   k \u03b8 a   \u30a2 \ud858\ude22 \ud83c\udf63"
// - 改行はブクマでコメントする時点で削除されている
// - ユニコードエスケープされている

const objectB = { message: "' \" \\ / < > & ア	𦈢	🍣" }
console.log(JSON.stringify(objectB))

// ユニコードの特定範囲を指定してエスケープする
const jsonEncodeA = (object: { [key: string]: string }): string => {
  return JSON.stringify(object).replace(/[\u0080-\uFFFF]/g, (match) => {
    const codeUnit = match.charCodeAt(0).toString(16)
    return `\\u${codeUnit.padStart(4, "0")}`
  })
}
console.log(jsonEncodeA(objectB))

// ユニコードの特定範囲を指定して & < > もエスケープする
// https://ja.wikipedia.org/wiki/Unicode%E4%B8%80%E8%A6%A7%E8%A1%A8
const jsonEncodeB = (object: { [key: string]: string }): string => {
  return JSON.stringify(object).replace(
    /[\u0026\u003C\u003E\u0080-\uFFFF]/g,
    (match) => {
      const codeUnit = match.charCodeAt(0).toString(16)
      return `\\u${codeUnit.padStart(4, "0")}`
    }
  )
}
console.log(jsonEncodeB(objectB))

export {}
