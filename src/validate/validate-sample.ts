export const isEmpty = (value: string): boolean => {
  return value === ""
}

export const isOnlyNumberString = (value: string): boolean => {
  return value.match(/^[0-9]+$/) !== null
}

export const isBeginZero = (value: string): boolean => {
  return value.match(/^0/) !== null
}

export const isPositiveIntegerString = (value: string): boolean => {
  return isOnlyNumberString(value) && !isBeginZero(value)
}

export const isOverCharLength = (value: string, length: number): boolean => {
  const codePoints = Array.from(value)
  return codePoints.length >= length
}

export const isValidArrayIndex = <T>(array: T[], index: number): boolean => {
  if (Number.isInteger(index) === false) {
    return false
  }
  if (index < 0 || array.length <= index) {
    return false
  }
  return true
}
