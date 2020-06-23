import { Builder } from "selenium-webdriver"

import { sleep } from "../useful-functions"

// フォームの書いてあるファイルをサーバ上で見られるようにしといて・・・
// serve ~/Projects/note/htmlcss/input
const main = async (): Promise<void> => {
  const driver = new Builder().forBrowser("chrome").build()
  await driver.get("http://localhost:5000/input-for-selenium")

  // TS, JS だと <select><option> を処理する専用のクラスは無いっぽい
  // <option> を特定してクリックすれば選択できる
  const xpath = "//option[@value='female']"
  const element = await driver.findElement({ xpath })
  element.click()
  sleep(10000)
}
main()
