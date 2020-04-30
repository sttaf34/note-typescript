import * as Moment from "moment"

// 閏年 leap year
// 2/29がある年
// year % 100 === 0 && year % 400 !== 0 => 平年
// year % 4 === 0 => うるう年

const isLeapYear = (year: number): boolean => {
  if (!Number.isInteger(year) || year < 0) {
    return false
  }
  if (year % 100 === 0 && year % 400 !== 0) {
    return false
  }
  return year % 4 === 0
}
export default isLeapYear

{
  // 2022年はうるう年ではないので、2022-02-29は存在しない
  // 日にちで差分を見ると365日になる
  const momentA = Moment("2022-05-05")
  const momentB = Moment("2022-05-05").subtract(1, "years") // 2021-05-05
  const diff = momentA.diff(momentB, "days")
  console.log(diff)
}

{
  // 2020年はうるう年なので、2020-02-29が存在する
  // 日にちで差分を見ると366日になる
  const momentA = Moment("2020-05-05")
  const momentB = Moment("2020-05-05").subtract(1, "years") // 2021-05-05
  const diff = momentA.diff(momentB, "days")
  console.log(diff)
}

// 過去一年間分の合計金額等を計算するときにタイミングによっては、
// 365日 or 366日の異なる範囲で計算することになってしまう
