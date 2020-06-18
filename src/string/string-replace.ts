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

// 置換・全部・文字列埋め込み
{
  const textA = "92%100%"
  const target = "%"
  const regularExpression = new RegExp(target, "g")
  const textB = textA.replace(regularExpression, "@@@")
  console.log(textB)
}
