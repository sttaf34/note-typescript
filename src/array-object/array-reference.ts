// これだと元の配列が変更される
// wordsA と wordsB は同じアドレスを指している（確認する術はないが）ので
// https://stackoverflow.com/questions/50530936/
{
  const wordsA = ["apple", "pine", "orange"]
  const wordsB = wordsA
  wordsB[0] = "grape"
  console.log(wordsA)
}

// 元の配列を変更しない
{
  const wordsA = ["apple", "pine", "orange"]
  const wordsB = wordsA.slice()
  wordsB[0] = "grape"
  console.log(wordsA)
}

// 元の配列を変更しない
{
  const wordsA = ["apple", "pine", "orange"]
  const wordsB = [...wordsA]
  wordsB[0] = "grape"
  console.log(wordsA)
}

export {}
