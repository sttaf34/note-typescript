import * as bcrypt from "bcrypt"

const passwordA = "password" // ユーザがフォームから入力する値
const passwordB = "12345678"

const saltA = bcrypt.genSaltSync()
const hashA = bcrypt.hashSync(passwordA, saltA)

const saltB = bcrypt.genSaltSync()
const hashB = bcrypt.hashSync(passwordB, saltB)

// hashAをDBに保存することになる
// hashAがsaltAを含んでいるので、saltAを区別してDBに保存する必要はない
console.log(`saltA -> ${saltA}`)
console.log(`hashA -> ${hashA}`)
console.log(`hashB -> ${hashB}`)

bcrypt.compare(passwordA, hashA, (error: Error, same: boolean): void => {
  const message = same ? "OK" : "NG"
  console.log(`A -> ${message}`)
})

bcrypt.compare(passwordB, hashA, (error: Error, same: boolean): void => {
  const message = same ? "OK" : "NG"
  console.log(`B -> ${message}`)
})
