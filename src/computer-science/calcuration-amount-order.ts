import { logExecutionTime } from "../useful-functions"

// 詳しい -> https://qiita.com/drken/items/872ebc3a2b5caaa4a0d0

// 整数乱数の配列取得
const randomNumbers = (n: number): number[] => {
  const numbers = Array.from({ length: n }, (_, index) => index + 1)
  for (let i = numbers.length - 1; i >= 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = numbers[i]
    numbers[i] = numbers[j]
    numbers[j] = temp
  }
  return numbers
}

// 線形探索（リニアサーチ）の計算量は O(n)
const execLinearSearch = (numbers: number[]): void => {
  const target = -3
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === target) {
      break
    }
  }
}

const main = (): void => {
  const numbers = randomNumbers(10000000)
  const doSomething = () => execLinearSearch(numbers)
  logExecutionTime(doSomething)
}

main()

export {}
