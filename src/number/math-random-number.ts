// 0 以上 1 未満のランダムな小数
console.log(Math.random())

// 範囲を指定したランダムな小数
// developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomArbitrary = (min: number, max: number): number => {
  return Math.random() * (max - min) + min
}
console.log(getRandomArbitrary(0.8, 1.3))

// Math.floor -> 引数の数以下の最大の整数を返す
console.log(Math.floor(99.8)) // 99

// 0 - 99 のランダムな整数
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
