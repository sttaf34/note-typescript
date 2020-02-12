// export default されたものに関しては自由に名前がつけられるが、
// いろんな理由で避けた方が良いと言われていたりする
// https://typescript-jp.gitbook.io/deep-dive/main-1/defaultisbad
import getHeightHeight from "./export-1"

console.log(getHeightHeight())

// import {  } from "./export-2"
//         ↑
// ここで「＾ + Space」押すと export 候補が出てくる
