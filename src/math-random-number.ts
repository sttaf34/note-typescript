// 0 - 1 のランダムな小数
console.log(Math.random())

// 0 - 100 のランダムな整数
const randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber)

const randomNumbers = (n: number): number[] => {
  // n個の整数の配列を用意
  const numbers = Array.from({ length: n }, (_, index) => index + 1)

  // Fisher-Yates のアルゴリズム
  // https://bellbind.hatenadiary.org/entry/20081105/1225886625
  /* eslint-disable for-direction */
  for (let i = numbers.length - 1; i >= 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = numbers[i]
    numbers[i] = numbers[j]
    numbers[j] = temp
  }
  return numbers
}

const numbers = randomNumbers(100)
console.log(numbers)
