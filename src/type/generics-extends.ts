type Fruit = {
  id: number
  name: string
}

type Vegetable = {
  id: number
  name: string
}

type Meat = {
  name: string
}

// 渡す型を { id: number } を持つものに限定している
const getId = <T extends { id: number }>(value: T): number => {
  return value.id
}

// 型を渡す場合
const fruit: Fruit = { id: 1, name: "apple" }
getId<Fruit>(fruit)

// 型推論されるので型を渡さなくても大丈夫っぽい
const vegetable: Vegetable = { id: 2, name: "pepper" }
getId(vegetable)

// Meat は { id: number } を持ってないので怒られる
// const meat: Meat = { name: "chicken" }
// getId<Meat>(meat)

export {}
