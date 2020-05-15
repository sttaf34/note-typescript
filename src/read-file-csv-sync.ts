/* eslint-disable import/first */

// ↓この書き方でしか import できないかと思いきや
// import parse = require("csv-parse/lib/sync")

// ↓こっちで大丈夫だった
import * as parse from "csv-parse/lib/sync"

import { readFileSync } from "fs"
import { expandTilde } from "./useful-functions"

const aPath = "~/Projects/note-typescript/assets/sample.csv"
const data = readFileSync(expandTilde(aPath))
const fruitData = parse(data, { columns: true })
console.log(fruitData)
