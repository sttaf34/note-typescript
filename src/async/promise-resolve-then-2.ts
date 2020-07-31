// https://azu.github.io/promises-book/#introduction

// 2秒経過するプロミス
const samplePromiseA = (): Promise<void> => {
  return new Promise((resolve): void => {
    setTimeout((): void => {
      resolve()
    }, 2000)
  })
}

const doSomethingA = (): void => {
  samplePromiseA().then(() => {
    console.log("Promise")
  })
  console.log("Hello")
}
// "Hello" => 時間経過 => "Promise"
doSomethingA()

const doSomethingB = async (): Promise<void> => {
  console.log("Hey")
  await samplePromiseA()
  console.log("Hello")
}
// "Hey" => 時間経過 => "Hello"
doSomethingB()

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

// 値が返ってくる場合の書き方で resolve の型を省略した形
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
