export const isEmpty = (value: string): boolean => {
  return value === ""
}

export const isNumberStringAll = (value: string): boolean => {
  return value.match(/^[0-9]+$/) !== null
}

export const isBeginZero = (value: string): boolean => {
  return value.match(/^0/) !== null
}

export const isPositiveIntegerString = (value: string): boolean => {
  return isNumberStringAll(value) && !isBeginZero(value)
}

// TODO: 4バイト文字考慮していない
export const isOver = (value: string, length: number): boolean => {
  return value.length >= length
}
