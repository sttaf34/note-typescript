import fetch from "node-fetch"
import { createReadStream } from "fs"
import * as FormData from "form-data"

import { expandTilde } from "../useful-functions"

// cd ~/Projects/note-express/ejs-file-upload && yarn develop
// ファイルアップロードを受け付けるサーバを起動しとく
const uploadA = async () => {
  const aPath = "~/Projects/note-typescript/assets/sample.csv"
  const stream = createReadStream(expandTilde(aPath))

  const formData = new FormData()
  formData.append("file", stream)

  const url = "http://localhost:10300/upload"
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  })
  console.log(response)
}
uploadA()

// cd ~/Projects/note-typescript && yarn ts-node src/server/server-post.ts
// ログ観察用サーバを起動しとく
// multipart/form-data になっていることを確認できる
const uploadB = async () => {
  const aPath = "~/Projects/note-typescript/assets/sample.csv"
  const stream = createReadStream(expandTilde(aPath))

  const formData = new FormData()
  formData.append("file", stream)
  formData.append("name", "sttaf34")
  formData.append("charset", "UTF-8")

  const url = "http://localhost:7000"
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  })
  console.log(response)
}
uploadB()

export {}
