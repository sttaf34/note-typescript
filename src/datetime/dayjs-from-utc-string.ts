import * as dayjs from "dayjs"
import * as utc from "dayjs/plugin/utc"

dayjs.extend(utc)

// UTC を "YYYY-MM-DD HH:mm:ss" な形式で保存した時刻文字列があったとする
// dayjs.tz.guess() なタイムゾーンを考慮した dayjs オブジェクトにしたい
// 2021-01-11T02:00:00Z かつ 2021-01-11T11:00:00+09:00 なオブジェクトが欲しい
const datetimeString = "2021-01-11 02:00:00"

{
  // 間違い
  // "2021-01-11T02:00:00+09:00" になってしまっている
  const dayjsObject = dayjs(datetimeString)
  console.log(dayjsObject)
}

{
  // https://day.js.org/docs/en/plugin/utc
  // 2021-01-11T02:00:00Z かつ 2021-01-11T11:00:00+09:00 の求めている形
  const dayjsObject = dayjs.utc(datetimeString).local()
  console.log(dayjsObject)
}
