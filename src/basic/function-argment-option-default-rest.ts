// 仮引数に「?」をつけると引数省略できる
const functionOption = (x?: number): void => {
  console.log(x)
}
functionOption()
functionOption(100)

// 引数のデフォルト値を指定
const functionDefault = (text = "Hello"): void => {
  console.log(text)
}
functionDefault()
functionDefault("Default!")

// 可変長引数
const functionRest = (...numbers: number[]): void => {
  const squaredNumbers = numbers.map(number => number * number)
  console.log(squaredNumbers)
}
// 渡し方は functionRest([1, 2, 3]) ではない
functionRest(1, 2, 3)
functionRest(1, 2, 3, 4, 5)

// 一個でも配列として扱われるようになってる
functionRest(33)

// 全部入り
const functionAll = (
  requiredNumber: number,
  optionNumber?: number,
  defaultNumber = 999,
  ...restNumbers: number[]
): void => {
  const array = Array<number | undefined>()
  array.push(requiredNumber)
  array.push(optionNumber)
  array.push(defaultNumber)
  console.log([...array, ...restNumbers])
}

functionAll(23)
functionAll(23, 33, 44, 55, 66, 77)
