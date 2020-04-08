import { Capabilities, Builder } from "selenium-webdriver"

import { expandTilde, sleep } from "../useful-functions"

const getCapabilities = (): Capabilities => {
  const capabilities = Capabilities.chrome()
  capabilities.set("chromeOptions", {
    args: ["--no-sandbox", "--disable-gpu", `--window-size=800,600`]
  })
  return capabilities
}

// ファイルアップロードのフォームのサーバを起動しておいてから・・・
// yarn ts-node ~/Projects/note-typescript/src/server/pug.ts => localhost:5000

const main = async (): Promise<void> => {
  const driver = await new Builder().withCapabilities(getCapabilities()).build()
  await driver.get("http://localhost:5000/")

  // 人間がダイアログを開いてファイル選択するのと同様の動作になる
  const input = await driver.findElement({ xpath: "/html/body/form/input[2]" })
  input.sendKeys(expandTilde("~/Projects/note-typescript/assets/sample.csv"))
  sleep(10000)
}
main()
