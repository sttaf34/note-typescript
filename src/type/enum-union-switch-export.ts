// 文字列をそのまま enum っぽく使う場合
export const fruits = [
  "apple",
  "orange",
  "banana",
  "pineapple",
  "grape",
] as const
export type Fruit = typeof fruits[number]

// 名前をつける場合
export const Direction = {
  North: "N",
  South: "S",
  East: "E",
  West: "W",
} as const
export type Direction = typeof Direction[keyof typeof Direction]
