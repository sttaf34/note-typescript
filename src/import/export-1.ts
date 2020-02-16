// 定数を export
export const width = 300
export const height = 400

// 関数を export
export const getWidth = (): number => {
  return width
}

// クラスを export
export class User {
  private name: string

  public constructor(name: string) {
    this.name = name
  }

  public getName = (): string => {
    return this.name
  }
}

// export default は import する時の指定が異なる
const getHeight = (): number => {
  return height
}
export default getHeight

// インスタンスを export
export const user = new User("sttaf34")
