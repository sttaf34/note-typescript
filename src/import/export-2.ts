// ファイルの中身は export-1.ts と一緒
// import の例に使うので用意しているファイル

export const width = 300
export const height = 400

export const getWidth = (): number => {
  return width
}

export class User {
  private name: string

  public constructor(name: string) {
    this.name = name
  }

  public getName = (): string => {
    return this.name
  }
}

const getHeight = (): number => {
  return height
}
export default getHeight
