import * as judge from "../src/string-character-code/string-character-code-judge"

test("isHiragana", (): void => {
  expect(judge.isHiragana("ぁぃいうえお")).toBe(true)
  expect(judge.isHiragana("ゐゑゔゝ゛゜ゞゟ")).toBe(true)

  expect(judge.isHiragana("゠")).toBe(false) // 0x30A0
})

test("isKatakana", (): void => {
  expect(judge.isKatakana("゠ァアカサタナ")).toBe(true)
  expect(judge.isKatakana("ヰ・ーヿ")).toBe(true)
  expect(judge.isKatakana("ぁぃいうえおゐゑ")).toBe(false)
})
