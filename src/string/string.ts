// 文字列埋め込み
const stringA = (): void => {
  const textA = "Hello"
  const textB = `${textA} World!`
  console.log(textB)
}
stringA()

// 含むの判定
const stringB = (): void => {
  const textA = "pineapple"
  const result: boolean = textA.includes("apple")
  console.log(result)
}
stringB()

// 置換
const stringC = (): void => {
  const textA = "92%"
  const textB = textA.replace("%", "")
  console.log(textB)
}
stringC()

// 開始文字列と終了文字列を指定してその前後を抜き出す
const stringD = (): void => {
  const html = "<html><body></body></html>"
  const start = html.indexOf("<body>")
  const end = html.indexOf("</body>", start) + "</body>".length
  const firstHalf = html.slice(0, start)
  const secondHalf = html.slice(end, Number.POSITIVE_INFINITY)
  console.log(firstHalf)
  console.log(secondHalf)
}
stringD()

// 文字列からインデックスで一文字取得
const stringE = (): void => {
  const textA = "pineapple"
  console.log(textA[2])
}
stringE()

// 検索して個数を数える
const stringF = (): void => {
  const text = "pineapple apple grape orange"
  const array = text.match(/apple/g) || []
  console.log(array.length)
}
stringF()
