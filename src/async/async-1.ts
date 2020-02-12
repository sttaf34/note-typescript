// https://azu.github.io/promises-book/#introduction

import fetch, { Response } from "node-fetch"

// fetchの一番シンプルな形
const aPromise: Promise<Response> = fetch("https://www.yahoo.co.jp")
aPromise.then((response: Response): void => {
  console.log(response.status)
})

// まとめてこう書くことが多い、エラー処理を追加
fetch("https://www.yahoo.co.jp")
  .then((response: Response): void => {
    console.log(response.status)
  })
  .catch((error: Error): void => {
    console.log(error)
  })

// function に async と書くことで Promise を返すことを定義する
// fetch(), res.json() は Promise を返すので await を置けるとなる
const fetchBookTitle = async (): Promise<string> => {
  // fetch() は Promise を返す関数なので await を置ける
  const res = await fetch("https://azu.github.io/promises-book/json/book.json")

  // 同様に res.json() は Promise を返す関数なので await を置ける
  // 本来は then catch でネストして書く必要があるのをすっきり書ける
  const json = await res.json()
  return json.title
}

const main = async (): Promise<void> => {
  // await の後に catch でコールバックを書ける
  const title = await fetchBookTitle().catch((error: Error): void => {
    console.log(error)
  })
  console.log(title)
}
main()
