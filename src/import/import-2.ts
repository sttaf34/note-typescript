// default でない定数、関数、クラス、インスタンスの import の書き方
import { width, getWidth, User, user } from "./export-1"

// as を使っての import の書き方
// export されているそれぞれを列挙する必要が無くなる
import * as Something from "./export-2"

// export_1の方の実行
console.log(width)
console.log(getWidth())
const userA = new User("sttaf34")
console.log(userA.getName())
console.log(user.getName()) // import したインスタンスの利用

// export_2の方の実行
console.log(Something.width)
console.log(Something.getWidth())

// export default されているものは呼び出せない
// console.log(Something.getHeight())
