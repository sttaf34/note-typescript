import { Big } from "big.js"

// 通常の Number 型の整数の限界値 9007199254740991
console.log(Number.MAX_SAFE_INTEGER)

// Number.MAX_SAFE_INTEGER を超えると
// 計算できないわけじゃないが、結果が間違ってる
// 33 ^ 13 の正しい計算結果は 55040353993448503713 なのだが、
console.log(33 ** 13) // 55040353993448505000 になる

// 大きな数値を正しく計算する
console.log(new Big(33).pow(13).toString()) // 55040353993448503713 で正しい

// RSA の暗号化と復号
// なんでここに書いてるかと言うと、大きい整数を扱う必要があるから
// ~/Projects/note/text/encryption_rsa.md
const plain = 33
const e = 13
const n = 2987
const d = 2197
console.log(`平文 => ${plain}`)

const cryptogram = new Big(plain)
  .pow(e)
  .mod(n)
  .toString()
console.log(`暗号文 => ${cryptogram}`)

const decryptedPlain = new Big(cryptogram)
  .pow(d)
  .mod(n)
  .toString()
console.log(`平文 => ${decryptedPlain}`)
