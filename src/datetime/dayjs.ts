import * as dayjs from "dayjs"

// https://day.js.org/

// 現在時刻のオブジェクト取得、UTCの値と現在タイムゾーンの値を持っている
const now: dayjs.Dayjs = dayjs()
console.log(now)

// フォーマットして文字列取得
// https://day.js.org/docs/en/display/format
console.log(now.format("YYYY-MM-DD HH:mm:ss"))

// 時刻の計算
console.log(now.subtract(1, "day")) // 1日過去
console.log(now.add(1, "minute")) // 1分未来

// ある日からある日数分の配列を取得
const begin = now.subtract(1, "week")
const dates = Array.from({ length: 7 }).map((_, index) => {
  return begin.add(index, "day").format("YYYY-MM-DD")
})
console.log(dates)
