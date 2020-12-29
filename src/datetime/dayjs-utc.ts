import * as dayjs from "dayjs"
import * as utc from "dayjs/plugin/utc"

dayjs.extend(utc)

// ISO 8601 という時刻表記の規格
// https://ja.wikipedia.org/wiki/ISO_8601
//
// UTC（協定世界時） -> 2020-04-15T12:34:56Z      （末尾のZでUTCを示している）
// UTC以外           -> 2020-04-15T21:34:56+09:00 （時差を併記する形）

// 現在時刻の UTC 文字列を取得
console.log(dayjs.utc().format())

// 現在時刻の時差が併記された文字列を取得
console.log(dayjs().format())

// UTC 文字列から dayjs のオブジェクトを生成
const dayjsObject = dayjs("2020-04-15T12:34:56Z")
console.log(dayjsObject)
