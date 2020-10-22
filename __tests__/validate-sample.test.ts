import * as validate from "../src/validate/validate-sample"

test("isEmpty", (): void => {
  expect(validate.isEmpty("")).toBe(true)
  expect(validate.isEmpty("a")).toBe(false)
  expect(validate.isEmpty("1")).toBe(false)
})

test("isOnlyNumberString", (): void => {
  expect(validate.isOnlyNumberString("123789")).toBe(true)
  expect(validate.isOnlyNumberString("")).toBe(false)
  expect(validate.isOnlyNumberString("abc")).toBe(false)
})

test("isBeginZero", (): void => {
  expect(validate.isBeginZero("0123")).toBe(true)
  expect(validate.isBeginZero("０１２３")).toBe(false)
  expect(validate.isBeginZero("")).toBe(false)
  expect(validate.isBeginZero("abc")).toBe(false)
})

test("isPositiveIntegerString", (): void => {
  expect(validate.isPositiveIntegerString("123")).toBe(true)
  expect(validate.isPositiveIntegerString("0123")).toBe(false)
  expect(validate.isPositiveIntegerString("-123")).toBe(false)
  expect(validate.isPositiveIntegerString("12.3")).toBe(false)
  expect(validate.isPositiveIntegerString("")).toBe(false)
  expect(validate.isPositiveIntegerString("123ab")).toBe(false)
  expect(validate.isPositiveIntegerString("9,800")).toBe(false)
})

test("isOverCharLength", (): void => {
  expect(validate.isOverCharLength("abc", 3)).toBe(true)
  expect(validate.isOverCharLength("", 0)).toBe(true)
  expect(validate.isOverCharLength("🍎🍊🍣", 3)).toBe(true)
  expect(validate.isOverCharLength("12345", 3)).toBe(true)
  expect(validate.isOverCharLength("ab", 3)).toBe(false)
  expect(validate.isOverCharLength("", 3)).toBe(false)
  expect(validate.isOverCharLength("🍎🍊🍣", 4)).toBe(false)
})

test("isValidArrayIndex", (): void => {
  const fruits = ["apple", "banana", "coconut"]
  expect(validate.isValidArrayIndex(fruits, -1)).toBe(false)
  expect(validate.isValidArrayIndex(fruits, 0)).toBe(true)
  expect(validate.isValidArrayIndex(fruits, 2)).toBe(true)
  expect(validate.isValidArrayIndex(fruits, 3)).toBe(false)

  expect(validate.isValidArrayIndex(fruits, 0.0)).toBe(true)
  expect(validate.isValidArrayIndex(fruits, Number.NaN)).toBe(false)

  expect(validate.isValidArrayIndex([], -1)).toBe(false)
  expect(validate.isValidArrayIndex([], 0)).toBe(false)
})
