// https://jsprimer.net/basic/string-unicode/

// Unicode 一覧表
// https://ja.wikipedia.org/wiki/Unicode%E4%B8%80%E8%A6%A7%E8%A1%A8
// 符号化文字集合とは「コンピュータが文字をビット列に変換する対応表のこと」
// ↓符号化文字集合の一つである Unicode の一部（16進数）
//      ０１２３４５６７８９ＡＢＣＤＥＦ
// 30A0 ゠ァアィイゥウェエォオカガキギク
// 30B0 グケゲコゴサザシジスズセゼソゾタ
// 30C0 ダチヂッツヅテデトドナニヌネノハ

// ASCII
// https://ja.wikipedia.org/wiki/ASCII
// ↓符号化文字集合の一つである ASCII の一部（16進数）
//   0123456789ABCDEF
// 2  !"#$%&'()*+,-./  20は半角スペース
// 3 0123456789:;<->?
// 4 @ABCDEFGHIJKLMNO
// 5 PQRSTUVWXYZ[\]^_
// 6 `abcdefghijklmno
// 7 pqrstuvwxyz{|}~   7Fは<DEL>

// Unicode のそれぞれの文字ごとに情報が載っているサイト
// https://www.fileformat.info/info/unicode/char/26222/index.htm

// Code Unit とは、特定の文字符号化方式を用いて、文字をバイト列化した値のこと
// 文字符号化方式の一例として「UTF-8」「UTF-16」がある
// 過去の互換性とかを考慮すると Code Point をそのまま使うことができなかったり
// するので、何かしらの文字符号化方式を用いて、バイト列化している
// 下記の表のように、同じ Unicode を扱っていても Code Unit が同じとは限らない

//      | Unicode    | UTF-8       |
// 文字 | Code Point | Code Unit   | メモ
// -----|------------|-------------|--------------------------------------------
// ア   | 30A2       | E3 82 A2    | 1バイトが3つ並んでる
// k    | 006B       | 6B          | 1バイトが1つ並んでる
// 𦈢   | 26222      | F0 A6 88 A2 | 1バイトが4つ並んでる

//      | Unicode    | UTF-16    |
// 文字 | Code Point | Code Unit | メモ
// -----|------------|-----------|----------------------------------------------
// ア   |  30A2      | 30A2      | 2バイト
// k    |  006B      | 006B      | 2バイト
// 𦈢   | 26222      | D858 DE22 | 2バイトが2つ並んでる
// UTF-16 の Code Unit は 2 or 4 バイトになっている

// UTF-16の4バイトで示される文字に関しては、
// 前半部分（上位サロゲートと呼ばれる）は D800 - DBFF の範囲に収まっている
// 後半部分（下位サロゲートと呼ばれる）は DC00 - DFFF の範囲に収まっている
// 0xD800 => 55296, 0xDBFF => 56319, 0xDC00 => 56320, 0XDFFF => 57343
// (56319 - 55296 + 1) * (57343 - 56320 + 1) = 1048576字分ってことになる
//
// UTF-16の2バイトで示される文字に関しては、
// サロゲートで使われる範囲は2バイトの方では使われないので、
// 0x0000 => 0, 0xD7FF => 55295, 0xE000 => 57344, 0xFFFF => 65535
// (55295 - 0 + 1) + (65535 - 57344 + 1) = 63488字分ってことになる
// 4バイトと2バイトの合計で 1048576 + 63488 = 1112064字分ってことになる

// JavaScript は内部では UTF-16 で文字列を扱っている
// 多くの String のメソッドは Code Unit 単位で動作するとのこと
// charCodeAtは引数インデックスの Code Unit を返す関数
const textA = "ア"
console.log(textA.charCodeAt(0).toString(16)) // 30a2 <= UTF-16 Code Unit

// ↑の表にあるように「𦈢」は4バイト文字なので、以下のように動作する
// Code Unit を丸ごと返してくれるわけはない
const textB = "𦈢"
console.log(textB.charCodeAt(0).toString(16)) // d858 <= UTF-16 Code Unit 前半
console.log(textB.charCodeAt(1).toString(16)) // de22 <= UTF-16 Code Unit 後半

// length は Code Unit 単位で動作するので、
// サロゲートペアな範囲の文字列の場合だと、文字数を間違いやすいかも
// これらは 2 になる例
console.log(textB.length)
console.log("🍺".length) // D83C DF7A
console.log("🍣".length) // D83C DF63
console.log("🍎".length) // D83C DF4E
