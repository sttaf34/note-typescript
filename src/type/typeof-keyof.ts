// typeof で型の文字列が返る
const typeStringA = typeof 333
console.log(typeStringA) // "number"

const value = "apple"
const typeStringB = typeof value
console.log(typeStringB) // "string"

console.log(typeof { name: "sttaf34" }) // "object"
console.log(typeof [1, 2, 3, 4, 5, 6]) // "object"

// keyof と書くと「"name" | "age"」という風なものが返る
interface User {
  name: string
  age: number
}
type UserKey = keyof User

// いつも使っている列挙の書き方
const Vegetable = {
  Okra: 1,
  Tomato: 2,
  Pumpkin: 3,
} as const
type Vegetable = typeof Vegetable[keyof typeof Vegetable]

// 最後の一行が読めないので解きほぐそうとしたがギブアップ
console.log(typeof Vegetable) // "object"
type TypeA = keyof typeof Vegetable // TypeA = "Okra" | "Tomato" | "Pumpkin"

export {}
