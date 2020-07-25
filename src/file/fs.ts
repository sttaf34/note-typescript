import { join } from "path"
import { readdirSync, statSync } from "fs"
import { expandTilde } from "../useful-functions"

/* 階層下のファイルとディレクトリを表示（一階層下のみ）
{
  const paths: string[] = readdirSync(expandTilde("~/Projects"))
  console.log(paths)
} // */

/* 階層下のファイルとディレクトリのオブジェクトを表示（一階層下のみ）
{
  const dirents = readdirSync(expandTilde("~"), { withFileTypes: true })
  dirents.forEach((dirent) => {
    console.log(dirent.name, dirent.isDirectory())
  })
} // */

// ファイルか否か判定
const isFile = (fullPath: string): boolean => {
  const stats = statSync(fullPath)
  return stats.isFile()
}

/*
console.log(isFile(expandTilde("~/Projects/dotfiles"))) // false
console.log(isFile(expandTilde("~/Projects/dotfiles/Brewfile"))) // true
// */

// ディレクトリの絶対パスを元に、
// 階層下のファイルとディレクトリの絶対パスの配列を返す（一階層下のみ）
const readFullPathsFromPath = (fullDirPath: string): string[] => {
  const paths = readdirSync(fullDirPath)
  return paths.map((path) => {
    return join(fullDirPath, path)
  })
}

/*
console.log(readFullPathsFromPath(expandTilde("~/Projects")))
console.log(readFullPathsFromPath(expandTilde("~/Downloads")))
// */

// 絶対パスの配列を元に、
// 階層下のファイルとディレクトリの絶対パスの配列を返す（一階層下のみ）
const readFullPathsFromPaths = (fullPaths: string[]): string[] => {
  let resultFullPaths = Array<string>()
  fullPaths.forEach((fullPath) => {
    if (isFile(fullPath)) {
      resultFullPaths.push(fullPath)
    } else {
      const paths = readFullPathsFromPath(fullPath)
      resultFullPaths = resultFullPaths.concat(paths)
    }
  })
  return resultFullPaths
}

// /*
console.log(readFullPathsFromPaths([expandTilde("~/Projects")]))
// */

// 絶対パスの配列を元に、
// 階層下のファイルの絶対パスの配列を返す（下階層すべて）
const readFullPathsRecursively = (fullPaths: string[]): string[] => {
  // 全部がファイルだったときが再帰の終了条件
  const isFileAll = fullPaths.every((fullPath) => isFile(fullPath))
  if (isFileAll) {
    return fullPaths
  }

  // 一階層だけ広げて自分を呼んで、全部まとめてから返す
  let resultFullPaths = Array<string>()
  fullPaths.forEach((fullPath) => {
    if (isFile(fullPath)) {
      resultFullPaths.push(fullPath)
    } else {
      let paths = readFullPathsFromPath(fullPath)
      paths = readFullPathsRecursively(paths)
      resultFullPaths = resultFullPaths.concat(paths)
    }
  })
  return resultFullPaths
}

// /*
const fullPathA = expandTilde("~/Projects/note/command")
console.log(readFullPathsRecursively([fullPathA]))
// */
