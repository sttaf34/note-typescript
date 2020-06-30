/* eslint-disable no-bitwise */

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

// & -> 各桁ごとに見ていき、どちらも 1 であれば 1 に、それ以外は 0 にする
{
  const a = 0b1001110000010001
  const b = 0b1010001001001001
  const result = a & b
  console.log(`& -> ${result.toString(2)}`)
}

// | -> 各桁ごとに見ていき、どちらかが 1 であれば 1 に、それ以外は 0 にする
{
  const a = 0b0111000001101011
  const b = 0b1000110000110101
  const result = a | b
  console.log(`| -> ${result.toString(2)}`)
}

// ^ -> 各桁ごとに見ていき、排他的論理和が 1 であれば 1 に、それ以外は 0 にする
{
  const a = 0b0111000001101011
  const b = 0b1000110001110101
  const result = a ^ b
  console.log(`^ -> ${result.toString(2)}`)
}

// << -> 指定ビット数分を左にシフト、右から0で埋める
{
  const a = 0b0001000001101011
  const result = a << 3
  console.log(`<< -> ${result.toString(2)}`)
}

// >> -> 指定ビット数分を右にシフト、右にあふれたビットは破棄
{
  const a = 0b1000000001101011
  const result = a >> 2
  console.log(`>> -> ${result.toString(2)}`) // ログだと先頭の0が省略される
}

//
{
  const result: number = 0b0001 & 0b0010
  console.log(result) // 0
  console.log(0b0001 & 0b0011) // 0b0001 => 1
  console.log(0b0010 & 0b0011) // 0b0010 => 2
  console.log(0b1000 & 0b1000) // 0b1000 => 8
}

export {}
