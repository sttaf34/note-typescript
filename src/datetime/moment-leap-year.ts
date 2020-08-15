import * as Moment from "moment"

// 閏年 leap year
// 2/29がある年
// 400で割り切れる => 閏年（1600, 2000）
// 100で割り切れるが、400で割り切れない => 閏年ではない（1500, 1900）
// 4で割り切れるが、100で割り切れない => 閏年（1996, 2004）

export const isLeapYear = (year: number): boolean => {
  if (!Number.isInteger(year) || year < 0) {
    return false
  }

  if (year % 400 === 0) {
    return true
  }

  if (year % 100 === 0) {
    return false
  }

  if (year % 4 === 0) {
    return true
  }

  return false
}

// 2022年はうるう年ではないので、2022-02-29は存在しない
// 日にちで差分を見ると365日になる
export const exampleA = (): void => {
  const momentA = Moment("2022-05-05")
  const momentB = Moment("2022-05-05").subtract(1, "years") // 2021-05-05
  const diff = momentA.diff(momentB, "days")
  console.log(diff)
}

// 2020年はうるう年なので、2020-02-29が存在する
// 日にちで差分を見ると366日になる
export const exampleB = (): void => {
  const momentA = Moment("2020-05-05")
  const momentB = Moment("2020-05-05").subtract(1, "years") // 2021-05-05
  const diff = momentA.diff(momentB, "days")
  console.log(diff)
}

// 過去一年間分の合計金額等を計算するときにタイミングによっては、
// 365日 or 366日の異なる範囲で計算することになってしまう
