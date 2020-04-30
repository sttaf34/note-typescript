/* eslint-disable no-restricted-syntax */

// 配列の要素の値ごとに登場回数を数える

const words = ["apple", "pine", "orange", "apple", "pine", "pine"]
const counts: { [key: string]: number } = {}
for (const word of words) {
  const result: boolean = word in counts
  if (result) {
    counts[word] += 1
  } else {
    counts[word] = 1
  }
}

console.log(counts)

export {}
