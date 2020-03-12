const regularA = (): void => {
  const text = "abcdefghijklmnopqrstuvwxyzabc"
  const result = text.match(/abc/)
  console.log(result) // 1個
}
regularA()

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_Searching_With_Flags
const regularB = (): void => {
  const text = "abcdefghijklmnopqrstuvwxyzabc"
  const result = text.match(/abc/g) // g => グローバルサーチフラグ
  console.log(result) // 複数マッチすれば複数個返る
}
regularB()
