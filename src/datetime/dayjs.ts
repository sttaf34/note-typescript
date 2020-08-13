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

{
  // 差分
  const dateA = now.subtract(1, "day")
  const dateB = now.add(1, "week")
  const diff: number = dateB.diff(dateA, "day")
  console.log(diff)
}

{
  // ある日からある日数分の配列を取得
  const begin = now.subtract(1, "week")
  const dates = Array.from({ length: 7 }).map((_, index) => {
    return begin.add(index, "day").format("YYYY-MM-DD")
  })
  console.log(dates)
}

{
  // ある日からある日までの配列を取得
  const begin = now.subtract(1, "week")
  const end = now.add(5, "day")
  const diff = end.diff(begin, "day") + 1
  const dates = Array.from({ length: diff }).map((_, index) => {
    return begin.add(index, "day").format("YYYY-MM-DD")
  })
  console.log(begin.format("YYYY-MM-DD"), end.format("YYYY-MM-DD"))
  console.log(dates)
}

{
  // 文字列から時刻オブジェクト化してフォーマットで文字列取得
  const datetime = dayjs("2020-06-25 04:00:58")
  console.log(datetime.format("YYYY-MM-DD"))
}

{
  // 標準の Date オブジェクトに変換
  const datetime = dayjs("2020-06-25 04:00:58")
  const nativeDate = datetime.toDate()
  console.log(nativeDate)
}
