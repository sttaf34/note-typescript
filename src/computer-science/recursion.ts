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
