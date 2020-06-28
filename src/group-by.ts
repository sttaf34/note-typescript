const data = [
  { id: 1, price: 5216 },
  { id: 2, price: 9287 },
  { id: 3, price: 2120 },
  { id: 4, price: 1475 },
  { id: 5, price: 3850 },
  { id: 6, price: 1410 },
  { id: 7, price: 3685 },
  { id: 8, price: 9516 },
  { id: 9, price: 7700 },
  { id: 10, price: 9394 },
]

const calculateQuotient = (dividend: number, divisor: number): string => {
  return String(Math.floor(dividend / divisor))
}

// 素朴にグループバイする
const groupedData: { [key: string]: Array<number> } = {}
data.forEach((each) => {
  const quotient = calculateQuotient(each.price, 500)
  if (Array.isArray(groupedData[quotient])) {
    groupedData[quotient].push(each.id)
  } else {
    groupedData[quotient] = [each.id]
  }
})

console.log(groupedData)

export {}
