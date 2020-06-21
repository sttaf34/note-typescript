import { Builder } from "selenium-webdriver"
import { Options } from "selenium-webdriver/chrome"

const main = async (): Promise<void> => {
  // いくつかオプション指定する場合
  const size = { width: 800, height: 600 }
  const options = new Options().headless().windowSize(size)
  const driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build()

  // 何もオプションなしの場合
  // const driver = new Builder().forBrowser("chrome").build()

  await driver.get("https://github.com/")
  const text = await driver.findElement({ tagName: "h1" }).getText()
  console.log(`<h1> => ${text}`)
}

main()
