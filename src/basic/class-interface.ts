// インターフェイスの実装をクラスで書いてみた形

interface UserInterface {
  name: string
  age: number
  getName(): string
}

class User implements UserInterface {
  public name = "Alice"

  public age = 24

  public getName = (): string => {
    return this.name
  }
}

const user = new User()
console.log(user.getName())
