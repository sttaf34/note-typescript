import isLeapYear from "../src/datetime/moment-leap-year"

test("function isLeapYear", (): void => {
  expect(isLeapYear(2000.2)).toBe(false)
  expect(isLeapYear(Number.NaN)).toBe(false)
  expect(isLeapYear(Number.NEGATIVE_INFINITY)).toBe(false)
  expect(isLeapYear(-2000)).toBe(false)
  expect(isLeapYear(1900)).toBe(false)
  expect(isLeapYear(2100)).toBe(false)

  expect(isLeapYear(1996)).toBe(true)
  expect(isLeapYear(2000)).toBe(true)
  expect(isLeapYear(2020)).toBe(true)
  expect(isLeapYear(0.0)).toBe(true)
  expect(isLeapYear(2000.0)).toBe(true)
})
