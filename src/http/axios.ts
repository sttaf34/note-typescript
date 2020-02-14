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
