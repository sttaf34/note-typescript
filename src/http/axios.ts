/* eslint-disable camelcase */

import axios, { AxiosResponse } from "axios"
import fetch, { Response } from "node-fetch"

const QIITA_API_URL_TAG = "https://qiita.com/api/v2/tags?page=1&sort=count"

const fetchSample = async (): Promise<void> => {
  const response: Response = await fetch(QIITA_API_URL_TAG)
  const data = await response.json()
  console.log(data[0])
}
fetchSample()

// axios だと response.data の時点で JSON からオブジェクトへの変換も完了済
const axiosSampleA = async (): Promise<void> => {
  const response: AxiosResponse = await axios.get(QIITA_API_URL_TAG)
  const { data } = response
  console.log(data[0])
}
axiosSampleA()

// cd ~/Projects/note-typescript && yarn ts-node src/server/server-json.ts
// JSON が壊れていた場合、エラーではなく文字列として処理された
const axiosSampleB = async (): Promise<void> => {
  const response: AxiosResponse = await axios.get("http://localhost:6800/bad")
  const { data } = response
  console.log(data)
  console.log(data[0])
}
axiosSampleB()

type QiitaTagData = {
  followers_count: number
  icon_url: string
  id: string
  items_count: number
}

// 型を渡せるようになってる
const axiosSampleC = async (): Promise<void> => {
  const response = await axios.get<QiitaTagData[]>(QIITA_API_URL_TAG)
  const { data: qiitaTagDataArray } = response
  console.log(qiitaTagDataArray[0])
}
axiosSampleC()

const axiosSampleD = async (): Promise<void> => {
  // https://qiita.com/api/v2/tags?page=1&sort=count と同じ
  const url = "https://qiita.com/api/v2/tags"
  const response = await axios.get(url, {
    params: {
      page: 1,
      sort: "count",
    },
  })
  const { data } = response
  console.log(data[0])
}
axiosSampleD()

// HTTP ヘッダ付与
const axiosSampleE = async (): Promise<void> => {
  const response = await axios.get(QIITA_API_URL_TAG, {
    headers: {
      "Accept-Language": "en",
    },
  })
  const { headers } = response
  console.log(headers)
}
axiosSampleE()
