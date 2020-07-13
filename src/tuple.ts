// 配列
{
  const numbers = [1, 2, 3]
  console.log(numbers)

  // 範囲外の場合 undefined が返る
  console.log(numbers[99])
}

// タプル
{
  const numbers: [number, number, number] = [1, 2, 3]
  console.log(numbers)

  // 範囲外の場合、静的解析で教えてくれる
  // console.log(numbers[99]) // 警告
  // numbers[999] = 999 // 警告
}

export {}
