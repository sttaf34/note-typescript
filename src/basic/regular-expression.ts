// ↑⌘Ｐ => Toggle Regex Preview In Side-By-Side Editors
"".match(/in/)
"".match(/in/g)

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

{
  const text = "https://example.com/aaa"

  // ? => 直前文字・0個か1個
  // 全然きっちり対応していないドメイン部分取得
  const result = text.match(/https?:\/\/([a-zA-z0-9-.]+)\/.*/)
  console.log(result)

  // ドメイン名のしくみ
  // https://www.nic.ad.jp/ja/dom/system.html
}

{
  // URLの中の日付の部分取得
  const text = "https://example.com/2020-07-07/"
  const result = text.match(/.+?(\d+-\d+-\d+).+?/)
  console.log(result)
}
