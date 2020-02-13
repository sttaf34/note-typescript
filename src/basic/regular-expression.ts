const regularA = (): void => {
  const text = "abcdefghijklmnopqrstuvwxyzabc"
  const result = text.match(/abc/)
  console.log(result) // 1個
}
regularA()

const regularB = (): void => {
  const text = "abcdefghijklmnopqrstuvwxyzabc"
  const result = text.match(/abc/g)
  console.log(result) // 複数マッチすれば複数個返る
}
regularB()
