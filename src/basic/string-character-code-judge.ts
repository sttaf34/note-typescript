/* eslint-disable no-restricted-syntax */

// コードポイントを使ってのひらがな判定
// https://www.unicode.org/charts/ によると、
// 0x3041(12353) - 0x309F(12447) がひらがなの範囲
// true => text が全てひらがな
export const isHiragana = (text: string): boolean => {
  const splittedCharsByCodePoint = Array.from(text)
  for (const char of splittedCharsByCodePoint) {
    const codePoint10 = char.codePointAt(0)
    if (codePoint10 == null) {
      return false
    }
    if (codePoint10 < 12353 || codePoint10 > 12447) {
      return false
    }
  }
  return true
}

// コードポイントを使ってのカタカナ判定
// 0x30A0(12448) - 0x30FF(12543) がひらがなの範囲
// true => text が全てひらがな
export const isKatakana = (text: string): boolean => {
  const splittedCharsByCodePoint = Array.from(text)
  for (const char of splittedCharsByCodePoint) {
    const codePoint10 = char.codePointAt(0)
    if (codePoint10 == null) {
      return false
    }
    if (codePoint10 < 12448 || codePoint10 > 12543) {
      return false
    }
  }
  return true
}
