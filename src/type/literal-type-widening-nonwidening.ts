/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */

{
  // 変数 apple は右辺の値からの型推論で string 型になる
  // VSCode 上で型を見ると string 型になってる
  let apple = "apple"
  apple = "banana" // 当然再代入できる
  console.log(apple)
}

{
  // 文字列リテラル型
  // VSCode 上で型を見ると "apple" 型になってる
  let apple: "apple" = "apple"
  // apple = "banana" // 型が違うので再代入できない
  console.log(apple)
}

{
  const apple = "apple" // 文字列リテラル型
  // apple = "banana" // const なので再代入できない
  console.log(apple)
}

{
  const apple = "apple" // 文字列リテラル型
  let fruit = apple // 再代入可能な変数に代入
  fruit = "banana" // 代入できるようになる、Literal Widening とのこと
  console.log(fruit, apple) // banana apple
}

//
// 再代入可能な変数に代入しても、代入できないようにしたいならば
// （Literal Widening は防ぎたい）
//

console.log("-------------------")

{
  // 明示的に "apple" 型を指定することで、
  // 再代入可能な変数に代入しても、代入できるようにならない
  let apple: "apple" = "apple" // 文字列リテラル型
  let fruit = apple // 再代入可能な変数に代入
  // fruit = "banana" // 再代入できない
  console.log(fruit)
}

{
  const apple: "apple" = "apple" // 記述が冗長だ
  let fruit = apple
  // fruit = "banana" // Literal Widening を防げるではある
  console.log(fruit)
}

{
  const apple = "apple" as const // こっちの方が良さげ
  let fruit = apple
  // fruit = "banana" // Literal Widening を防げる
  console.log(fruit)
}
