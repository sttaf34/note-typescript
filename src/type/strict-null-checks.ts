// tsconfig.json の strictNullChecks を true にした場合
// 個人で書くときはなるべく true にしていく予定

const helloOrNull = (): string | null => {
  const randomNumber = Math.floor(Math.random() * 10)
  return randomNumber > 5 ? "hello!" : null
}

// strictNullChecks: true にしておけば、、、
const something = helloOrNull()
if (typeof something === "string") {
  console.log(something.length) // string 確定なので安全にメソッドが呼べる
} else {
  // something にカーソルをあてると型が null になっている
  console.log(something)

  // null に対するメソッド呼び出しをコンパイラがチェックしてくれる
  // console.log(something.length)
}
