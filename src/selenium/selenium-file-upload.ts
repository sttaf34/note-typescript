import { Capabilities, Builder } from "selenium-webdriver"

import { expandTilde, sleep } from "../useful-functions"

const getCapabilities = (): Capabilities => {
  const capabilities = Capabilities.chrome()
  capabilities.set("chromeOptions", {
    args: ["--no-sandbox", "--disable-gpu", `--window-size=800,600`]
  })
  return capabilities
}

// フォームの書いてあるファイルをサーバ上で見られるようにしといて・・・
// serve ~/Projects/note/htmlcss/input
const main = async (): Promise<void> => {
  const driver = await new Builder().withCapabilities(getCapabilities()).build()
  await driver.get("http://localhost:5000/input-for-selenium")

  // 人間がダイアログを開いてファイル選択するのと同様の動作になる
  const input = await driver.findElement({ xpath: "//input[@name='file']" })
  input.sendKeys(expandTilde("~/Projects/note-typescript/assets/sample.csv"))
  sleep(10000)
}
main()
