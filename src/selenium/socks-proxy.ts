import { Capabilities, Builder } from "selenium-webdriver"

// 予め↓でアクセスできるようにしておく
// curl --socks5 localhost:10080 ifconfig.io
const getCapabilities = (): Capabilities => {
  const capabilities = Capabilities.chrome()
  capabilities.set("chromeOptions", {
    args: [`--proxy-server=socks://localhost:10080`],
  })
  return capabilities
}

const main = async (): Promise<void> => {
  const driver = new Builder()
    .forBrowser("chrome")
    .withCapabilities(getCapabilities())
    .build()
  await driver.get("https://ifconfig.io/")
  await driver.sleep(10 * 1000)
}
main()
