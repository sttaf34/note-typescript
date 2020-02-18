import { join } from "path"
import { readFileSync } from "fs"

import csvSync = require("csv-parse/lib/sync")

const expandTilde = (filePath: string): string => {
  if (filePath[0] === "~" && typeof process.env.HOME === "string") {
    return join(process.env.HOME, filePath.slice(1))
  }
  return filePath
}

const aPath = "~/Projects/note-typescript/assets/sample.csv"
const data = readFileSync(expandTilde(aPath))
const priceData = csvSync(data, { columns: true })
console.log(priceData)
