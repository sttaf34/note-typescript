import * as dayjs from "dayjs"

// https://day.js.org/

// 現在時刻のオブジェクト取得、UTCの値と現在タイムゾーンの値を持っている
const now: dayjs.Dayjs = dayjs()
console.log(now)

// フォーマットして文字列取得
// https://day.js.org/docs/en/display/format
console.log(now.format("YYYY-MM-DD HH:mm:ss"))
