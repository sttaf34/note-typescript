type Book = {
  title: string
  price: number
}
const bookA: Book = { title: "すごい本", price: 1980 }
console.log(bookA)

// プロパティが多いので指摘してくれる
// const bookB: Book = { title: "面白い本", price: 2980, page: 300 }

// プロパティが少ないので指摘してくれる
// const data = { title: "面白い本" }
// const bookC: Book = data

// このように書くと指摘してくれない
// Book 型に必要なプロパティは持っているので、Book とみなせる的な扱い
const data = { title: "面白い本", price: 2980, page: 300 }
const bookD: Book = data
console.log(bookD)

// 同様に指摘してくれない
const bookE: Book = { ...data }
console.log(bookE)

export {}
