/* eslint-disable no-bitwise */

enum Status {
  None = 0,
  Quick = 1 << 0, //                                         1(10進数)
  Cheap = 1 << 1, // 00000001 を左シフトするから 00000010 => 2(10進数)
  Tasty = 1 << 2, // 00000001 を左シフトするから 00000100 => 4(10進数)
}

type BeefBowl = {
  status: Status
}

const logStatus = (beefBowl: BeefBowl): void => {
  // 例
  // 00000001 & 00000001 => 00000001 => 1
  // (引き数)   (Quick)
  //
  // 00000100 & 00000001 => 00000000 => 0
  // (引き数)   (Quick)

  const result = beefBowl.status & Status.Quick
  if (result) {
    console.log("速い！")
  }

  if (beefBowl.status & Status.Cheap) {
    console.log("安い！")
  }
  if (beefBowl.status & Status.Tasty) {
    console.log("旨い！")
  }
}

{
  const beefBowlA = {
    status: Status.None,
  }
  console.log("牛丼チェーンA")
  logStatus(beefBowlA)
}

{
  // 00000010 と 00000100 のビット毎の論理和(OR) => 00000110
  const beefBowlB = {
    status: Status.Cheap | Status.Tasty,
  }
  console.log("牛丼チェーンB")
  logStatus(beefBowlB)
}

{
  const beefBowlC = {
    status: Status.Quick | Status.Cheap | Status.Tasty,
  }
  console.log("牛丼チェーンC")
  logStatus(beefBowlC)
}
