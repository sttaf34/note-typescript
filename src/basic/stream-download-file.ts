import { readFileSync, createReadStream, createWriteStream } from "fs"
import fetch from "node-fetch"
import * as dayjs from "dayjs"
import { expandTilde } from "../useful-functions"

// ダミーデータ作成サービスで作ったデータ
const aPath = "~/Projects/note-typescript/assets/users.csv"

const readStream = (): void => {
  // 完全にファイルを読み込んでから、出力している
  // 仮にWEBサービスの中で、ユーザのリクエストから以下の処理が行われると
  // 読み込み中は、他のリクエストをさばけないらしい
  const data = readFileSync(expandTilde(aPath))
  console.log(data)

  // 一定量読みつつ、読んだ分から出力しているような処理になっているとのこと
  // ReadStream -> WriteStream に接続しているのでパイプという名前「|」のこと
  const stream = createReadStream(expandTilde(aPath))
  stream.pipe(process.stdout)
}
readStream()

// fetch で画像をダウンロードしてファイルにしている
const download = async (): Promise<void> => {
  const now = dayjs().format("YYYYMMDDHHmmss")
  const response = await fetch("https://dummyimage.com/300")
  const writeStream = createWriteStream(expandTilde(`~/Desktop/${now}.png`))
  response.body.pipe(writeStream)
}
download()

export {}
