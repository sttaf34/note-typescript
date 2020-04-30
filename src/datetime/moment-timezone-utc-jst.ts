import * as Moment from "moment-timezone"

// ISO 8601 という時刻表記の規格
// https://ja.wikipedia.org/wiki/ISO_8601
//
// UTC（協定世界時） -> 2020-04-15T12:34:56Z   （末尾のZでUTCを示している）
// UTC以外           -> 2004-04-01T12:00+09:00 （時差を併記する形）

// 指定しないとタイムゾーンは undefined になってる
const momentA = Moment("2020-04-15T12:34:56Z")
console.log(momentA.tz())
console.log(momentA.inspect())

// タイムゾーン指定すると、時差を付けてくれる
// 地域名は https://momentjs.com/timezone/ の地図に書いてある
console.log(momentA.tz("Asia/Tokyo").inspect())

// "JST" の文字列もフォーマットで指定できる
console.log(momentA.tz("Asia/Tokyo").format("z"))
