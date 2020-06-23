import { Builder } from "selenium-webdriver"
import * as dayjs from "dayjs"
import { writeFileSync } from "fs"
import { expandTilde } from "../useful-functions"

const main = async (): Promise<void> => {
  const driver = new Builder().forBrowser("chrome").build()
  await driver.get("https://example.com/")
  const base64 = await driver.takeScreenshot()
  const buffer = Buffer.from(base64, "base64")
  const fileName = dayjs().format("YYYYMMDDHHmmss.png")
  const path = expandTilde(`~/Desktop/${fileName}`)
  writeFileSync(path, buffer)
}

main()
