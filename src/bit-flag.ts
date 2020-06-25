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
  if (beefBowl.status & Status.Quick) {
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
  console.log("A")
  logStatus(beefBowlA)
}

{
  // 00000010 と 00000100 のビット毎の論理和 => 00000110
  const beefBowlB = {
    status: Status.Cheap | Status.Tasty,
  }
  console.log("B")
  logStatus(beefBowlB)
}

{
  const beefBowlC = {
    status: Status.None,
  }
  console.log("C")
  logStatus(beefBowlC)
}
