import { Builder } from "selenium-webdriver"
import fetch from "node-fetch"
import * as dayjs from "dayjs"
import { createWriteStream } from "fs"

import { expandTilde, sleep } from "../useful-functions"

// serve ~/Projects/note/htmlcss/input
// フォームの書いてあるファイルをサーバ上で見られるようにしといて・・・

// ローカルのファイルをセットする場合
const mainA = async (): Promise<void> => {
  const driver = new Builder().forBrowser("chrome").build()
  await driver.get("http://localhost:5000/input-for-selenium")

  // 人間がダイアログを開いてファイル選択するのと同様の動作になる
  const input = await driver.findElement({ xpath: "//input[@name='file']" })
  input.sendKeys(expandTilde("~/Projects/note-typescript/assets/sample.csv"))
  sleep(10000)
}
mainA()

// インターネットからダウンロードしたファイルをセットする場合
const mainB = async (): Promise<void> => {
  const now = dayjs().format("YYYYMMDDHHmmss")
  const response = await fetch("https://dummyimage.com/300")
  const writeStream = createWriteStream(expandTilde(`~/Desktop/${now}.png`))
  const stream = response.body.pipe(writeStream)

  // ストリームの処理終了時の処理
  stream.on("finish", async () => {
    console.log("finish")
    const driver = new Builder().forBrowser("chrome").build()
    await driver.get("http://localhost:5000/input-for-selenium")

    const input = await driver.findElement({ xpath: "//input[@name='file']" })
    input.sendKeys(expandTilde(`~/Desktop/${now}.png`))
    sleep(10000)
  })
}
mainB()

export {}
