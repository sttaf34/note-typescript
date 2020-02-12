import * as path from "path"

// path.resolveは絶対パス変換とのこと
const path1 = path.resolve(".")
console.log(path1)

// チルダは展開されない
const path2 = path.resolve("~/")
console.log(path2)

// チルダ展開する関数
const expandTilde = (filePath: string): string => {
  if (filePath[0] === "~" && typeof process.env.HOME === "string") {
    return path.join(process.env.HOME, filePath.slice(1))
  }
  return filePath
}

const resolvedPath = expandTilde("~/Projects")
console.log(resolvedPath)
