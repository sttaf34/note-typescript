// 色々考慮して、列挙をどのように書くか考え中
// https://www.kabuku.co.jp/developers/good-bye-typescript-enum

// 列挙して扱いたいものを定義
const Direction = {
  North: "N",
  South: "S",
  East: "E",
  West: "W",
} as const
type Direction = typeof Direction[keyof typeof Direction]

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

// 反復処理
// eslint-disable-next-line no-restricted-syntax
for (const direction of Object.values(Direction)) {
  console.log(direction)
}

const logJapaneseName = (direction: Direction): void => {
  switch (direction) {
    case Direction.North:
      console.log("北")
      break
    case Direction.South:
      console.log("南")
      break
    case Direction.East:
      console.log("東")
      break
    case Direction.West:
      console.log("西")
      break
  }
}
logJapaneseName(Direction.North)
