import { readFileSync } from "fs"
import { expandTilde } from "./useful-functions"

import csvSync = require("csv-parse/lib/sync")

const aPath = "~/Projects/note-typescript/assets/sample.csv"
const data = readFileSync(expandTilde(aPath))
const priceData = csvSync(data, { columns: true })
console.log(priceData)
