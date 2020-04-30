import * as Moment from "moment"

// https://momentjs.com

// 現在時刻をMoment型で取得
const aMoment: Moment.Moment = Moment()
console.log(aMoment.inspect())

// 時刻取得
const hour: number = aMoment.hour()
console.log(hour)

// フォーマット指定しての取得
// https://momentjs.com/docs/#/parsing/string-format/
const format: string = aMoment.format("YYYY-MM-DD HH:mm:ss")
console.log(format)

// ミリ秒で取得
const millisecond = aMoment.valueOf()
console.log(millisecond)

// Moment型同士の差分、処理時間計測などに使える
const aMomentNext = Moment()
console.log(aMomentNext.millisecond())
const diff: number = aMomentNext.diff(aMoment)
console.log(diff)

// 文字列からの生成
const momentA: Moment.Moment = Moment("2019-10-10 10:00:00")
console.log(momentA.inspect())

// 足し算・破壊的な関数
const momentB = Moment()
momentB.add(35, "years")
console.log(momentB.inspect())

// 引き算・破壊的な関数
momentB.subtract(185, "years")
console.log(momentB.inspect())
