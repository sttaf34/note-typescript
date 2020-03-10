import { Capabilities, Builder } from "selenium-webdriver"

// 予め↓でアクセスできるようにしておく
// curl --socks5 localhost:10080 ifconfig.io
const getCapabilities = (): Capabilities => {
  const capabilities = Capabilities.chrome()
  capabilities.set("chromeOptions", {
    args: [
      `--no-sandbox`,
      `--disable-gpu`,
      `--window-size=800,600`,
      `--proxy-server=socks://localhost:10080`
    ]
  })
  return capabilities
}

const main = async (): Promise<void> => {
  const driver = await new Builder().withCapabilities(getCapabilities()).build()
  await driver.get("https://ifconfig.io/")
}
main()
