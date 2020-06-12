//
// Size.Small.Width, Size.Large.Height みたいに使える定数集の書き方の試行錯誤
// ./importConstants.ts で import して使ってみている
//
// - 型が認識される
// - 代入不可
// - 補完が適切
//

export class SizeA {
  public static Small = {
    Width: 400,
  }

  public static Large = {
    Height: 800,
  }
}

export const SizeB = {
  Small: {
    Width: 400,
  },
  Large: {
    Height: 800,
  },
}

interface SizeCInterface {
  readonly [key: string]: {
    readonly [key: string]: number
  }
}

export const SizeC: SizeCInterface = {
  Small: {
    Width: 400,
  },
  Large: {
    Height: 800,
  },
}

// この書き方を使うようにする
// 定義する方もシンプルで、利用する方も機能が十分
export const SizeD = {
  Small: {
    Width: 400,
  },
  Large: {
    Height: 800,
  },
} as const

// 名前空間つきの関数
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace UtilityA {
  export const add = (a: number, b: number): number => {
    return a + b
  }
}

export const UtilityB = {
  add: (a: number, b: number): number => {
    return a + b
  },
} as const
