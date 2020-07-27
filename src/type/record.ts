{
  // キーが string で、値が number なオブジェクトの型を Record で書いてみた形
  const dictionaryA: Record<string, number> = {}
  dictionaryA.keyA = 11
  console.log(dictionaryA)
}

{
  // ↑と一緒なはず
  const dictionary: { [key: string]: number } = {}
  dictionary.keyA = 111
  dictionary.keyB = 222
  console.log(dictionary)
}

{
  // 値の型を number | undefined にしといた方が安全だ
  const dictionary: Record<string, number | undefined> = {}
  const value = dictionary.keyEmpty

  // undefined チェックしてないと指摘が入る
  // value.toString()

  if (value) {
    console.log(value.toString())
  }
}

{
  // ↑と一緒なはず
  const dictionary: { [key: string]: number | undefined } = {}
  const value = dictionary.keyEmpty

  // undefined チェックしてないと指摘が入る
  // value.toString()

  if (value) {
    console.log(value.toString())
  }
}

export {}
