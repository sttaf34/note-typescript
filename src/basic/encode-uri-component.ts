import fetch, { Response } from "node-fetch"

const encodeUriSample = async (): Promise<void> => {
  const url = "https://google.com/search?q=日本語"

  // 日本語含んでいるとエラーになる
  console.log(`[[${url}]]`)
  await fetch(url).catch((error: Error): void => {
    console.log(error.message)
  })

  // encodeURIを通すことでの変換すれば正常にアクセスできる
  // https://google.com/search?q=%E6%97%A5%E6%9C%AC%E8%AA%9E のように変換される
  const encodedUrl = encodeURI(url)
  console.log(`[[${encodedUrl}]]`)
  await fetch(encodedUrl).then((response: Response): void => {
    console.log(response.status)
  })

  // URIそのものを渡してエンコードしてもらう用
  // URI内で意味をもつ #$&+,/:;=?@ の文字は変換されない
  // スペースがふくまれている場合は %20 になる
}

const encodeUriComponentSample = async (): Promise<void> => {
  const urlA = "https://google.com/search?q=日本語"

  // encodeURIComponent は #$&+,/:;=?@ も変換対象
  // URL の全体を丸ごと渡してしまうとエラーになる
  const encodedUrl = encodeURIComponent(urlA)
  console.log(`[[${encodedUrl}]]`)
  await fetch(encodedUrl).catch((error: Error): void => {
    console.log(error.message)
  })

  // これだと正常にアクセスできる
  const japanese = "日本語"
  const urlB = `https://google.com/search?q=${encodeURIComponent(japanese)}`
  console.log(`[[${urlB}]]`)
  await fetch(urlB).then((response: Response): void => {
    console.log(response.status)
  })
}

// 新しめの機能の URLSearchParams が便利そうなのでこれを使っていく
const searchParamsSample = async (): Promise<void> => {
  const searchParams = new URLSearchParams("")
  searchParams.append("q", "日本語")
  console.log(searchParams.toString())
}

encodeUriSample()
encodeUriComponentSample()
searchParamsSample()

export {}
