import { join } from "path"
import * as moment from "moment"

export const expandTilde = (filePath: string): string => {
  if (filePath.length === 0 || process.env.HOME == null) {
    return filePath
  }

  if (filePath[0] === "~") {
    return join(process.env.HOME, filePath.slice(1))
  }
  return filePath
}

export const sleep = async (milliseconds: number): Promise<void> => {
  return new Promise((resolve: () => void): void => {
    setTimeout((): void => {
      resolve()
    }, milliseconds)
  })
}

export const logExecutionTime = (doSomething: () => void): void => {
  const startMillisecond = moment().valueOf()
  console.log("executing...")

  doSomething()

  const endMillisecond = moment().valueOf()
  const diffMillisecond = endMillisecond - startMillisecond
  console.log(`${diffMillisecond} millisecond`)
}
