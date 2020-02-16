// export default と export の両方をまとめての書き方例
import getHeight, { width, getWidth, User } from "./export-1"
import getHeightFrom2, * as Something from "./export-2"

console.log(width)
console.log(getWidth())

const user = new User("sttaf34")
console.log(user.getName())
console.log(getHeight())

console.log(getHeightFrom2())
console.log(Something.getWidth())
