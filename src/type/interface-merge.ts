//
// interface のマージ
//

interface Fruit {
  name: string
}

interface Fruit {
  isSweet: boolean
}

const fruit: Fruit = {
  name: "apple",
  isSweet: true,
}
console.log(fruit)

interface Animal<T> {
  name: string
  feature: T
}

interface Dog<T> extends Animal<T> {
  type: string
}

interface Dog<T> {
  weight: number
}

export {}
