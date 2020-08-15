import * as validate from "../src/validate"

test("isEmpty", (): void => {
  expect(validate.isEmpty("")).toBe(true)
  expect(validate.isEmpty("a")).toBe(false)
  expect(validate.isEmpty("1")).toBe(false)
})

test("isNumberStringAll", (): void => {
  expect(validate.isNumberStringAll("123789")).toBe(true)
  expect(validate.isNumberStringAll("")).toBe(false)
  expect(validate.isNumberStringAll("abc")).toBe(false)
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

test("isOver", (): void => {
  expect(validate.isOver("abc", 3)).toBe(true)
  expect(validate.isOver("", 0)).toBe(true)
  expect(validate.isOver("12345", 3)).toBe(true)
  expect(validate.isOver("ab", 3)).toBe(false)
  expect(validate.isOver("", 3)).toBe(false)
})
