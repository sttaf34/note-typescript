import { Builder, Capabilities } from "selenium-webdriver"
import { Options } from "selenium-webdriver/chrome"

const mainOption = async (): Promise<void> => {
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

mainOption()

// よく使うオプションは↑のように用意されている
//
// もっと細かいオプションが大量にある
// https://peter.sh/experiments/chromium-command-line-switches/
const getCapabilities = (): Capabilities => {
  const capabilities = Capabilities.chrome()
  capabilities.set("chromeOptions", {
    args: [
      // `--window-position=100,100`, // 立ち上がり時のポジション指定
      `--start-maximized `, // 立ち上がり時にウィンドウ最大化
      // `--headless`,
    ],
  })
  return capabilities
}

const mainCapability = async (): Promise<void> => {
  const driver = new Builder()
    .forBrowser("chrome")
    .withCapabilities(getCapabilities())
    .build()

  await driver.get("https://example.com/")
  const text = await driver.findElement({ tagName: "h1" }).getText()
  console.log(`<h1> => ${text}`)
}

mainCapability()
