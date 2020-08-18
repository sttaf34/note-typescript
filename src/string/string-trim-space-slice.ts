// スペース除去
const textA = " Hello "
console.log(`[${textA.trim()}]`)

// 全角スペースも除去される
const textB = " Hello　"
console.log(`[${textB.trim()}]`)

// 切り取り
const textC = "abcdefghijklmnopqrstuvwxyz"
const beginIndex = 0
const endIndex = 5
console.log(textC.slice(beginIndex, endIndex))

{
  // 開始文字列と終了文字列を指定してその前後を抜き出す
  const html = "<html><body></body></html>"
  const start = html.indexOf("<body>")
  const end = html.indexOf("</body>", start) + "</body>".length
  const firstHalf = html.slice(0, start)
  const secondHalf = html.slice(end, Number.POSITIVE_INFINITY)
  console.log(firstHalf)
  console.log(secondHalf)
}

export {}
