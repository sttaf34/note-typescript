import * as fs from "fs"
import { expandTilde, sleep } from "./useful-functions"

// すべてのプロセスが持つべき3つのファイルディスクリプタ
// 0 -> 標準入力
// 1 -> 標準出力
// 2 -> 標準エラー

const main = async (): Promise<void> => {
  const aPath = "~/Projects/note-typescript/assets/sample.csv"
  Array.from({ length: 10 }).forEach(() => {
    fs.open(expandTilde(aPath), fs.constants.R_OK, 0o666, (error, fd) => {
      // ファイルを開くと 3 から順番に割り当てられていく
      console.log(fd)
    })
  })
  await sleep(60000)
}
main()

// - プロセスが作られて、プログラムが実行される
// - /proc の下に PID ごとにディレクトリができる
// - ちなみに ps aux で PID が確認できる
// - /proc/PID/fd の下にファイルディスクリプタがある
