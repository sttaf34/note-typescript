// https://ja.wikipedia.org/wiki/Unicode一覧_3000-3FFF
// \u3041 => ぁ, \u3096 => ゖ
// \u30A1 => ァ , \u30F6 => ヶ
// ↑の範囲ではコードポイント的に 0x60 を足すと、
// 「ひらがな」が「カタカナ」になるような関係性になってる
export const convertToKatakana = (hiragana: string): string => {
  return hiragana.replace(/[\u3041-\u3096]/, (matched) => {
    const codeUnit = matched.charCodeAt(0) + 0x60
    return String.fromCharCode(codeUnit)
  })
}

export const convertToHiragana = (katakana: string): string => {
  return katakana.replace(/[\u30A1-\u30F6]/, (matched) => {
    const codeUnit = matched.charCodeAt(0) - 0x60
    return String.fromCharCode(codeUnit)
  })
}
