/* eslint-disable no-restricted-syntax */

{
  // for in はオブジェクトのプロパティが対象
  // const userA = { id: 1, firstName: "AAA" }
  const userA: { [key: string]: number | string } = { id: 1, firstName: "AAA" }
  for (const key in userA) {
    if (Object.prototype.hasOwnProperty.call(userA, key)) {
      console.log(key, userA[key])
    }
  }

  // for of は配列の要素が対象
  const words = ["apple", "plum", "orange", "pineapple", "x", "by", "hat"]
  for (const word of words) {
    console.log(word)
  }

  // 配列を for in する場合、各要素でなくてインデックスが対象
  const numbers = [3, 4, 55]
  for (const index in numbers) {
    if (Object.prototype.hasOwnProperty.call(numbers, index)) {
      console.log(index)
    }
  }

  // for of だと各要素が対象
  for (const number of numbers) {
    console.log(number)
  }
}
