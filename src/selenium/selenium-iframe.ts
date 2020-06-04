import { Capabilities, Builder } from "selenium-webdriver"

import { sleep } from "../useful-functions"

// フォーム等の書いてあるファイルをサーバ上で見られるようにしといて・・・
// serve ~/Projects/note/htmlcss/input
const main = async (): Promise<void> => {
  const capabilities = Capabilities.chrome()
  const driver = await new Builder().withCapabilities(capabilities).build()
  await driver.get("http://localhost:5000/input-for-selenium")

  // <iframe> の中を見るように切り替えて・・・
  const xpath = "//iframe[@id='iframe']"
  const element = await driver.findElement({ xpath })
  await driver.switchTo().frame(element)

  // 以降は通常と同様で大丈夫
  const xpathInFrame = "/html/body"
  const elementInFrame = await driver.findElement({ xpath: xpathInFrame })
  const text = await elementInFrame.getText()
  console.log(text)

  // <iframe> の中を見ているので、外側の方は見れない、エラーになる
  // const xpathOuter = "//input[@name='apple']"
  // const elementOuter = await driver.findElement({ xpath: xpathOuter })
  // await elementOuter.click()

  // 外側の方を見るように戻せば良い
  await driver.switchTo().defaultContent()
  const xpathOuter = "//input[@name='apple']"
  const elementOuter = await driver.findElement({ xpath: xpathOuter })
  await elementOuter.click()

  sleep(10000)
}
main()
