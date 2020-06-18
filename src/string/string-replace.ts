// 置換・先頭の一つだけ
{
  const textA = "92%100%"
  const textB = textA.replace("%", "")
  console.log(textB)
}

// 置換・全部
{
  const textA = "92%100%"
  const textB = textA.replace(/%/g, "@@@")
  console.log(textB)
}

// 置換・全部・文字列埋め込みで正規表現を組み立てる
{
  const textA = "92%100%"
  const target = "%"
  const regularExpression = new RegExp(target, "g")
  const textB = textA.replace(regularExpression, "@@@")
  console.log(textB)
}

// 置換・先頭の一つだけ・関数で何か処理を書いて置換後の文字列にする場合
{
  const textA = "abcXXXdef"
  const textB = textA.replace(/X/, (matched) => {
    console.log(matched)
    return String(matched.length)
  })
  console.log(textB)
}

// 置換・全部・関数で何か処理を書いて置換後の文字列にする場合
{
  const textA = "abcXXXdef"
  const textB = textA.replace(/X/g, (matched) => {
    return matched.toLowerCase()
  })
  console.log(textB)
}

// キャプチャを含んだ正規表現の場合
{
  const text = "&#12354;&#37326;&#37096;" // あ野部
  const regex = /&#(\d+);/g
  const replaced = text.replace(regex, (matched, capture) => {
    console.log(matched) // &#12354; => &#37326; => &#37096;
    console.log(capture) // 12354    => 37326    => 37096
    return String.fromCharCode(capture) // 数値から文字列化
  })
  console.log(replaced)
}
