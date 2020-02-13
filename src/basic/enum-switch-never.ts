import { $enum } from "ts-enum-util"

enum Direction {
  North = "North",
  South = "South",
  East = "East",
  West = "West"
}

// enum の中身を増やして、この関数の中身も対応していない場合、警告してくれる
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
