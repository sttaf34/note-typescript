// 論理演算
// http://www.asahi-net.or.jp/~ax2s-kmtn/ref/logicope.html

const isMultipleThree = (aNumber: number): boolean => {
  return aNumber % 3 === 0
}
const isMultipleFive = (aNumber: number): boolean => {
  return aNumber % 5 === 0
}

const logLogicalOperation = (aNumber: number): void => {
  const array: string[] = []
  const isThree = isMultipleThree(aNumber)
  const isFive = isMultipleFive(aNumber)

  // AND
  const and = isThree && isFive ? "論理積" : "　　　"
  array.push(and)

  // OR
  const or = isThree || isFive ? "論理和" : "　　　"
  array.push(or)

  // NAND
  const nand = !(isThree && isFive) ? "否定論理積" : "　　　　　"
  array.push(nand)

  // NOR
  const nor = !(isThree || isFive) ? "否定論理和" : "　　　　　"
  array.push(nor)

  // XOR
  const xor =
    (isThree || isFive) && !(isThree && isFive)
      ? "排他的論理和"
      : "　　　　　　"
  array.push(xor)

  // 桁揃え表示
  const paddedNumber = String(aNumber).padStart(3)
  const numberIsThree = isThree ? 1 : 0
  const numberIsFive = isFive ? 1 : 0
  console.log(
    `${paddedNumber} ${numberIsThree} ${numberIsFive} ${array.join(" ")}`
  )
}

for (let i = 1; i < 20; i += 1) {
  logLogicalOperation(i)
}
