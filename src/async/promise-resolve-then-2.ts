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
const samplePromise = (): Promise<void> => {
  return new Promise((resolve: () => void): void => {
    // 通信して2秒後に成功となったというイメージ
    setTimeout((): void => {
      resolve()
    }, 2000)
  })
}
console.log("Hello...")
samplePromise().then((): void => {
  console.log("Sample!")
})
