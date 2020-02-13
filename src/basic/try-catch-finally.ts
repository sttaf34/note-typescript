const getObjectFromJsonString = (jsonString: string): {} => {
  try {
    // JSON.parseが例外を起こす可能性があることは、F12で飛んだ先には書いてない
    // try catch しない場合に、静的解析で知らせてくれることもない
    // 何かしらの形で、知らせてくれる仕組みが欲しいところ
    return JSON.parse(jsonString)
  } catch (error) {
    return {}
  }
}

const main = (): void => {
  const objectA = getObjectFromJsonString('{"name": "apple", "isSweet": tru')
  const objectB = getObjectFromJsonString('{"name": "okra"}')
  console.log(objectA)
  console.log(objectB)
}

main()
