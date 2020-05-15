import * as parse from "csv-parse"

import { createReadStream } from "fs"
import { expandTilde } from "./useful-functions"

// ファイルから一定量読みつつ、読んだ分から CSV のパーサーに渡している形
{
  const parser = parse((error, records) => {
    console.log("ストリームの分")
    console.log(records)
  })

  const aPath = "~/Projects/note-typescript/assets/sample.csv"
  const stream = createReadStream(expandTilde(aPath))
  stream.pipe(parser)
}

// CSV な形式の文字列をパースしている形
{
  const csvString = "1,2\n3,4\n"
  parse(csvString, (error, records) => {
    console.log(records)
  })
}
