// オブジェクトの分割代入
const user = { id: 1, name: "sttaf34" }
{
  // 通常の分割代入
  const { id, name } = user
  console.log(id, name)
}
{
  // 別名で受ける
  const { id: userId, name: userName } = user
  console.log(userId, userName)
}

// 配列の分割代入
const numbers = [1, 2, 3]
{
  // 個数が合わなくても、最後の方を無視してくれる
  const [numberA, numberB] = numbers
  console.log(numberA, numberB)
}
{
  // 不要な要素は省略できる
  const [, , numberC] = numbers
  console.log(numberC)
}
{
  // 多く受け取ろうとすると undefined になる
  const [, , , numberD] = numbers
  console.log(numberD)
}

export {}
