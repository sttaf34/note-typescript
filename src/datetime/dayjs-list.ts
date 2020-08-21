import * as dayjs from "dayjs"
import "dayjs/locale/ja"

type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type Early = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type Middle = 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
type Late = 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31
type Date = Early | Middle | Late

dayjs.locale("ja") // 曜日の日本語化

const dateList = (month: Month, date: Date, length: number): string[] => {
  const dates = Array.from({ length }).map((_, index) => {
    return dayjs()
      .month(month - 1)
      .date(date + index)
      .format("MM/DD(ddd)")
  })
  return dates
}

// 05/05(火)
// 05/06(水)
// 05/07(木)
const list = dateList(5, 5, 3)
console.log(list.join("\n"))
