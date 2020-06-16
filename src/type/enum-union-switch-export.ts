// 色々考慮して、列挙をどのように書くか考え中
// https://www.kabuku.co.jp/developers/good-bye-typescript-enum

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

// eslint(@typescript-eslint/switch-exhaustiveness-check) を有効にすることで、
// switch 内での列挙漏れを防ぎ、eslint(default-case) は off にする
//
// case で return する場合は、eslint(consistent-return) 都度変更するしかない？
// eslint-disable-next-line consistent-return
const japaneseName = (direction: Direction): string => {
  switch (direction) {
    case Direction.North:
      return "北"
    case Direction.South:
      return "南"
    case Direction.East:
      return "東"
    case Direction.West:
      return "西"
  }
}
console.log(japaneseName(Direction.East))
