import * as dayjs from "dayjs"
import * as ja from "dayjs/locale/ja"

dayjs.locale(ja)

// フォーマットして文字列取得
// https://day.js.org/docs/en/display/format
// dddd => 水曜日とかになる
console.log(dayjs().format("YYYY-MM-DD dddd"))
