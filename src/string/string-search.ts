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
  console.log(text.indexOf("grapefruit")) // -1
}

{
  const text = "https://example.com"
  const isHttp = text.indexOf("http") === 0
  console.log(isHttp)
}
