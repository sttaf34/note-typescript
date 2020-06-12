import { SizeA, SizeB, SizeC, SizeD } from "./exportConstants"

// 型       => OK
// 代入不可 => NG
// 補完     => OK
console.log(SizeA.Small.Width)
console.log(SizeA.Large.Height)
SizeA.Small.Width = 777
console.log(SizeA.Small.Width)

// 型       => OK
// 代入不可 => NG
// 補完     => OK
console.log(SizeB.Small.Width)
console.log(SizeB.Large.Height)
SizeB.Small.Width = 777
console.log(SizeB.Small.Width)

// 型       => OK
// 代入不可 => OK
// 補完     => NG
console.log(SizeC.Small.Width)
console.log(SizeC.Large.Height)
// SizeC.Small.Width = 777 // 警告される

// 型       => OK!
// 代入不可 => OK!!
// 補完     => OK!!!
console.log(SizeD.Small.Width)
console.log(SizeD.Large.Height)
// SizeD.Small.Width = 777 // 警告される
