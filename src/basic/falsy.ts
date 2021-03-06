/* eslint-disable @typescript-eslint/ban-types */

// https://typescript-jp.gitbook.io/deep-dive/recap/truthy

const logTrueOrFalse = (value: string | number | object): void => {
  console.log("-----------------")
  if (value) {
    console.log(value)
    console.log("は真")
  } else {
    console.log(value)
    console.log("は偽")
  }
}

// false
logTrueOrFalse("")
logTrueOrFalse(0)

// true
logTrueOrFalse([])
logTrueOrFalse({})

export {}
