/* eslint-disable @typescript-eslint/no-unused-vars */

// 自分が普段使っている export の仕方をしている npm のライブラリ
// F12 で見に行くと、見慣れた形をしている、ES6の構文
import { genSalt } from "bcrypt"
import * as dotevn from "dotenv"

// https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Modules.md#export--and-import--require
// https://qiita.com/sakymark/items/601b9ba4c5ff9a2d51e8
// F12 で見に行くと、見慣れない形をしている、ちゃんと理解してない
// export = deepEqual
// export = parse
import deepEqual = require("deep-equal")
import csvSync = require("csv-parse/lib/sync")
