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

  // XOR・一発で取れる演算子はJavaScriptにはないので素朴に計算する
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
    `${paddedNumber} ${numberIsThree} ${numberIsFive}  ${array.join(" ")}`
  )
}

console.log(`    A B A and B A or B !(A and B) !(A or B)  (A xor B)`)
for (let i = 1; i <= 18; i += 1) {
  logLogicalOperation(i)
}

// ド・モルガンの法則（検索用:ドモルガン）
//
// 1 - 18 までの整数の範囲において、
// 3の倍数を集合Aとし、5の倍数を集合Bとした場合
//
// ド・モルガンの法則によると
// 「!(A and B)」と「!A or !B」は等しくなる、
// !(A and B) => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,    16, 17, 18
// !A         => 1, 2,    4, 5,    7, 8,    10, 11,     13, 14,    16, 17
// !B         => 1, 2, 3, 4,    6, 7, 8, 9,     11, 12, 13, 14,    16, 17, 18
// !A or !B   => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,    16, 17, 18
//
// 又、
// 「!(A or B)」と「!A and !b」は等しくなる
// !(A or B)  => 1, 2,    4,       7, 8,        11,     13, 14,    16, 17
// !A         => 1, 2,    4, 5,    7, 8,    10, 11,     13, 14,    16, 17
// !B         => 1, 2, 3, 4,    6, 7, 8, 9,     11, 12, 13, 14,    16, 17, 18
// !A and !b  => 1, 2,    4,       7, 8,        11,     13, 14,    16, 17
