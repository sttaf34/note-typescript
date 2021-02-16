import axios from "axios"

// ログ確認用
// cd ~/Projects/note-typescript && yarn ts-node src/server/server-json.ts

// リクエストボディに JSON 文字列
const sampleA = async (): Promise<void> => {
  const url = "http://localhost:7000"
  await axios.post(url, { name: "sttaf34", age: 39 })
}
sampleA()
