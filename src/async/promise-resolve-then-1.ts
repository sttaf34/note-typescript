// https://azu.github.io/promises-book/#introduction

// 時刻経過を可視化するために出力しとく
console.log("Hello...")

// 2000ミリ秒後にリゾルブするプロミスを生成
const promiseA: Promise<void> = new Promise((resolve: () => void): void => {
  setTimeout((): void => {
    resolve()
  }, 2000)
})
// 非同期で実行される、リゾルブしたときの動作を指定
promiseA.then((): void => {
  console.log("Promise!")
})

// 通常であれば、promiseの中に書くのは通信とかになるかと思う
const promiseB: Promise<string> = new Promise(
  (resolve: (response: string) => void): void => {
    setTimeout((): void => {
      resolve("HTTP Response")
    }, 4000)
  }
)
// 通信の結果を使って、非同期で何かするっぽい形
promiseB.then((response: string): void => {
  console.log(response)
})

// 失敗も起こりうる形
const promiseC = new Promise(
  (resolve: () => void, reject: () => void): void => {
    setTimeout((): void => {
      return Math.random() >= 0.5 ? resolve() : reject()
    }, 6000)
  }
)
promiseC
  .then((): void => {
    console.log("Big!")
  })
  .catch((): void => {
    console.log("Small!")
  })

// ↑のと書き方が違うだけ
promiseC.then(
  (): void => {
    console.log("Big!")
  },
  (): void => {
    console.log("Small!")
  }
)
