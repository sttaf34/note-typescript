{
  // 含むの判定
  const text = "pineapple"
  const result: boolean = text.includes("apple")
  console.log(result)
}

{
  // 見つかったインデックス取得
  const text = "pineapple"
  const result = text.indexOf("apple")
  console.log(result)
  console.log(text.indexOf("grapefruit")) // 見つからないときが -1 が返る
}

{
  const text = "https://example.com"
  const isHttp = text.indexOf("http") === 0
  console.log(isHttp)
}

{
  // 検索して個数を数える
  const text = "pineapple apple grape orange"
  const array: RegExpMatchArray = text.match(/apple/g) || []
  console.log(array.length)
}
