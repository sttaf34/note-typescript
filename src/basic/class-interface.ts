// インターフェイスの実装をクラスで書いてみた形

interface UserInterface {
  name: string
  age: number
  getName(): string
}

class User implements UserInterface {
  public name = "Alice"

  public age = 24

  // new User("Bob", 32) でインスタンス化するときに呼ばれる
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  public getName = (): string => {
    return this.name
  }
}

const user = new User("Bob", 32)
console.log(user.getName())
