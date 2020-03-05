import { $enum } from "ts-enum-util"

//
// ts-enum-util を使ってみた場合
//

enum Direction {
  North = "North",
  South = "South",
  East = "East",
  West = "West"
}

// enum の中身を増やして、この関数の中身も対応していない場合、警告してくれる
// とは言え、標準の switch を使っておきたい感がある
const createDirectionString = (direction: Direction): string => {
  return $enum.mapValue(direction).with({
    [Direction.North]: "北！",
    [Direction.South]: "南！",
    [Direction.East]: "東！",
    [Direction.West]: "西！"
  })
}

const directionString = createDirectionString(Direction.North)
console.log(directionString)

//
// enum の代わりに union を使ってみる
// https://www.kabuku.co.jp/developers/good-bye-typescript-enum
//

const fruits = ["Apple", "Orange"] as const
type Fruit = typeof fruits[number]

const logColor = (fruit: Fruit): void => {
  switch (fruit) {
    case "Apple":
      console.log("赤")
      break
    case "Orange":
      console.log("橙")
      break
  }
}
logColor("Apple")

// 文字列のままだと F12 でジャンプできないので、オブジェクトで列挙してみる
const Vegetable = {
  Okra: 1,
  Tomato: 2,
  Pumpkin: 3
} as const
type Vegetable = typeof Vegetable[keyof typeof Vegetable]

const logTaste = (vegetable: Vegetable): void => {
  switch (vegetable) {
    case Vegetable.Okra:
      console.log("ねばねば")
      break
    case Vegetable.Tomato:
      console.log("うまい")
      break
    case Vegetable.Pumpkin:
      console.log("あまい")
      break
  }
}
logTaste(Vegetable.Okra)
