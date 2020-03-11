{
  const numbers = [1, 2, 3]
  const result: number = numbers.reduce(
    (previousValue, currentValue, currentIndex): number => {
      console.log(currentIndex)
      return previousValue + currentValue
      // 一週目
      // previousValue => 1, currentValue => 2
      // previousValue + currentValue => 3
      // 二週目
      // previousValue => 3 一周目の計算結果
      // currentValue => 3
      // previousValue + currentValue => 6
    }
  )
  console.log(result)
}

{
  // reduce の第二引数の initialValue がある場合
  const numbers = [4, 5, 6]
  const result: number = numbers.reduce(
    (previousValue, currentValue): number => {
      return previousValue + currentValue
      // 一週目
      // previousValue => 3 initialValue が渡ってくる
      // currentValue => 4
      // previousValue + currentValue => 7
      // 二週目
      // previousValue => 7
      // currentValue => 5
      // previousValue + currentValue => 12
      // 三週目
      // previousValue => 12
      // currentValue => 6
      // previousValue + currentValue => 18
    },
    3
  )
  console.log(result)
}

{
  // 配列の最大値を求める
  const numbers = [9, 13, 6, 42, 32, 3]
  const max = numbers.reduce((previousValue, currentValue): number => {
    return Math.max(previousValue, currentValue)
  })
  console.log(max)
}

export {}
