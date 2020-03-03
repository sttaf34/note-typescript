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

// 文字列置換
const stringC = (): void => {
  const textA = "92%"
  const textB = textA.replace("%", "")
  console.log(textB)
}
stringC()

// 位置検索
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

// インデックスで取得
const stringE = (): void => {
  const textA = "pineapple"
  console.log(textA[2])
}
stringE()
