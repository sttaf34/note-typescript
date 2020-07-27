import { logExecutionTime } from "../useful-functions"

{
  // 階乗（5! = 5 * 4 * 3 * 2 * 1 = 120）
  const factorial = (aNumber: number): number => {
    if (aNumber === 0) {
      return 1
    }
    return aNumber * factorial(aNumber - 1)
  }

  // factorial(3) => return 3 * factorial(2)
  // factorial(2) => return 2 * factorial(1)
  // factorial(1) => return 1 * factorial(0)
  // factorial(0) => return 1
  console.log(factorial(3))
}

{
  // フィボナッチ数
  // 0, 1, 1, 2, 3, 5, 8, 13, 21
  const fibonacci = (aNumber: number): number => {
    // 数式のままの素朴な実装
    if (aNumber === 0) {
      return 0
    }
    if (aNumber === 1) {
      return 1
    }
    return fibonacci(aNumber - 1) + fibonacci(aNumber - 2)
  }

  logExecutionTime(() => fibonacci(8))
  logExecutionTime(() => fibonacci(30))
  logExecutionTime(() => fibonacci(34)) // 0.1秒程度
  logExecutionTime(() => fibonacci(39)) // 1秒以上
  logExecutionTime(() => fibonacci(43)) // 5秒以上
}
