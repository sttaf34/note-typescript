// https://azu.github.io/promises-book/#introduction

import fetch from "node-fetch"

const fetchStatus = async (url: string): Promise<void> => {
  const res = await fetch(url)
  console.log(`${url} ${res.status}`)
}

const fetchAll = async (): Promise<void> => {
  const status1 = fetchStatus("https://www.yahoo.co.jp")
  const status2 = fetchStatus("https://www.google.co.jp")
  const status3 = fetchStatus("http://abehiroshi.la.coocan.jp/")

  // Promise.all -> 同時に実行して、全部実行完了のタイミングで処理が書ける
  Promise.all([status1, status2, status3]).then((): void => {
    console.log("Finish All")
  })
}
fetchAll()
