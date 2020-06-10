import { Fruit, fruits, Direction } from "./enum-union-switch-export"

{
  // 1つ
  const aFruit: Fruit = "apple"
  console.log(aFruit)

  // 全部
  fruits.forEach((fruit: Fruit) => {
    console.log(fruit)
  })

  // switch
  const logJapaneseName = (fruit: Fruit): void => {
    switch (fruit) {
      case "apple":
        console.log("りんご")
        break
      case "orange":
        console.log("オレンジ")
        break
      case "banana":
        console.log("東")
        break
      case "pineapple":
        console.log("パイナップル")
        break
      case "grape":
        console.log("ぶどう")
        break
    }
  }
  logJapaneseName("apple")
}

{
  // 1つ
  const aDirection: Direction = Direction.East
  console.log(aDirection)

  // 全部
  Object.values(Direction).forEach((direction) => {
    console.log(direction)
  })

  // switch
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
}
