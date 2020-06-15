import { Capabilities, Builder } from "selenium-webdriver"

// オプションの表がある
// https://peter.sh/experiments/chromium-command-line-switches/
const getCapabilities = (): Capabilities => {
  const capabilities = Capabilities.chrome()
  capabilities.set("chromeOptions", {
    args: [
      // '--headless',
      "--no-sandbox",
      "--disable-gpu",
      `--window-size=800,600`,
    ],
  })
  return capabilities
}

const main = async (): Promise<void> => {
  const driver = await new Builder().withCapabilities(getCapabilities()).build()
  await driver.get("https://github.com/")
  const text = await driver.findElement({ tagName: "h1" }).getText()
  console.log(`<h1> => ${text}`)
}
main()
