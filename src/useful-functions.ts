import { join } from "path"

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
