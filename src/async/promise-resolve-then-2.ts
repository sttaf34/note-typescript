// https://azu.github.io/promises-book/#introduction

// Promiseを返す関数、実行すると即座に成功する
const simplePromise = (): Promise<void> => {
  return new Promise((resolve: () => void): void => {
    resolve()
  })
}
console.log("Hello...")
simplePromise().then((): void => {
  console.log("Simple!")
})

// Promiseを返す関数を使った形
const samplePromiseA = (): Promise<void> => {
  return new Promise((resolve: () => void): void => {
    // 通信して2秒後に成功となったというイメージ
    setTimeout((): void => {
      resolve()
    }, 2000)
  })
}
console.log("Hello...")
samplePromiseA().then((): void => {
  console.log("Sample!")
})

// Promise で何か値が返ってくる場合の書き方
const samplePromiseB = (): Promise<number> => {
  return new Promise((resolve: (aNumber: number) => void): void => {
    resolve(1000)
  })
}
console.log("Hello...")
samplePromiseB().then((aNumber: number): void => {
  console.log(aNumber)
})

// Promise で何か値が返ってくる場合の書き方で、
// resolve のところの型省略して大丈夫そう
const samplePromiseC = (): Promise<number> => {
  return new Promise((resolve): void => {
    resolve(2000)
  })
}
console.log("Hello...")
samplePromiseC().then((aNumber: number): void => {
  console.log(aNumber)
})

export {}
