{
  const text = "abcdefghijklmnopqrstuvwxyzabc"
  const result = text.match(/abc/)
  console.log(result) // 1個
}

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_Searching_With_Flags
{
  const text = "abcdefghijklmnopqrstuvwxyzabc"
  const result = text.match(/abc/g) // g => グローバルサーチフラグ
  console.log(result) // 複数マッチすれば複数個返る
}

{
  const text = "ABCDeFghiJKLMNoPQrsTu"
  const result = text.match(/[a-z]/g) // アルファベット小文字
  console.log(result)
}

{
  const text = "吾輩は CAT である。名前は nothing だ。今年で 88 才です。"
  const result = text.match(/[a-zA-z0-9]+/g) // アルファベットと数字
  console.log(result)
}
