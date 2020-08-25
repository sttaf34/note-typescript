import fetch, { Response } from "node-fetch"

// 時々エラーの起きる関数
const doSomething = async (): Promise<void> => {
  const host = "https://sttaf34-netlify-functions.netlify.app"
  const path = "/.netlify/functions/allow-origin"
  const response: Response = await fetch(host + path)
  const value = Math.random()
  console.log(value)
  if (value > 0.5) {
    throw new Error("Something is wrong.")
  }
  const text = await response.text()
  console.log(text)
}

const main = async (): Promise<void> => {
  try {
    await doSomething()
  } catch (error) {
    console.log("キャッチされる")
  }
}

main()
