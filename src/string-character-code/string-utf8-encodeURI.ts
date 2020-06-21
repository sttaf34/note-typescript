//      | Unicode    | UTF-8       |
// 文字 | Code Point | Code Unit   | メモ
// -----|------------|-------------|--------------------------------------------
// k    | 006B       | 6B          | 1バイトが1つ並んでる
// θ   | 03B8       | CE B8       | 1バイトが2つ並んでる
// ア   | 30A2       | E3 82 A2    | 1バイトが3つ並んでる
// 𦈢   | 26222      | F0 A6 88 A2 | 1バイトが4つ並んでる

console.log(encodeURI("k")) // k
console.log(encodeURI("θ")) // %CE%B8
console.log(encodeURI("ア")) // %E3%82%A2
console.log(encodeURI("𦈢")) // %F0%A6%88%A2

// encodeURIはUTF-8のCode Unitを表示するための関数という訳ではないが、
// 2バイト以上に該当するものに関しては、Code Unitを表示できるではある
