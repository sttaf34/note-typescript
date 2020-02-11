import * as Moment from "moment"

// https://momentjs.com

// 現在時刻をMoment型で取得
const aMoment: Moment.Moment = Moment()
console.log(aMoment)

const hour: number = aMoment.hour()
console.log(hour)

// https://momentjs.com/docs/#/parsing/string-format/
const format: string = aMoment.format("YYYY-MM-DD HH:mm:ss")
console.log(format)

const millisecond = aMoment.valueOf()
console.log(millisecond)

// Moment型同士の差分、処理時間計測などに使える
const aMomentNext = Moment()
console.log(aMomentNext.millisecond())
const diff: number = aMomentNext.diff(aMoment)
console.log(diff)

// 文字列からの生成
const moment1: Moment.Moment = Moment("2019-10-10 10:00:00")
console.log(moment1)
