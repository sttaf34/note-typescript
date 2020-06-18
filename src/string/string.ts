// 文字列埋め込み
{
  const textA = "Hello"
  const textB = `${textA} World!`
  console.log(textB)
}

// 含むの判定
{
  const textA = "pineapple"
  const result: boolean = textA.includes("apple")
  console.log(result)
}

// 開始文字列と終了文字列を指定してその前後を抜き出す
{
  const html = "<html><body></body></html>"
  const start = html.indexOf("<body>")
  const end = html.indexOf("</body>", start) + "</body>".length
  const firstHalf = html.slice(0, start)
  const secondHalf = html.slice(end, Number.POSITIVE_INFINITY)
  console.log(firstHalf)
  console.log(secondHalf)
}

// 文字列からインデックスで一文字取得
{
  const textA = "pineapple"
  console.log(textA[2])
}

// 検索して個数を数える
{
  const text = "pineapple apple grape orange"
  const array: RegExpMatchArray = text.match(/apple/g) || []
  console.log(array.length)
}
