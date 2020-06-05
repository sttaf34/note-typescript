{
  const dictA: { [key: string]: string } = {
    keyA: "valueA",
    keyB: "valueB",
    keyC: "valueC",
  }
  const dictB: { [key: string]: string } = {
    keyA: "valueA",
    KeyD: "vaueD",
  }
  const dictAKeys = Object.keys(dictA)
  const dictBKeys = Object.keys(dictB)

  // 両方に存在するキーを抽出
  const bothKey = dictAKeys.filter((dictAKey) => dictBKeys.includes(dictAKey))
  console.log(bothKey)

  // 片方にだけ存在するキーを抽出
  const onlyDictAKey = dictAKeys.filter(
    (dictAKey) => !dictBKeys.includes(dictAKey)
  )
  const onlyDictBKey = dictBKeys.filter(
    (dictBKey) => !dictAKeys.includes(dictBKey)
  )
  console.log(onlyDictAKey, onlyDictBKey)
}
