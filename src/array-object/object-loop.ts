// オブジェクト生成
const aDictionary: { [key: string]: number } = { keyA: 33333 }
aDictionary.keyB = 44444
aDictionary.keyC = 55555

// 値だけを配列にする
const values = Object.values(aDictionary)
values.forEach((value) => console.log(value))

// キーだけを配列にする
const keys = Object.keys(aDictionary)
keys.forEach((key) => console.log(key))

// キーと値の両方を配列にする
const keyAndValues: [string, number][] = Object.entries(aDictionary)
keyAndValues.forEach(([key, value]) => console.log(key, value))

export {}
