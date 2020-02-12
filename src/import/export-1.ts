// 定数をexport
export const width = 300
export const height = 400

// 関数をexport
export const getWidth = (): number => {
  return width
}

// クラスをexport
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
