import { Builder, WebDriver, until } from "selenium-webdriver"

class Driver {
  private driver: WebDriver

  public constructor() {
    this.driver = new Builder().forBrowser("chrome").build()
  }

  private doSomethingOnLocalhost = async (): Promise<void> => {
    // 予め serve ~/Projects/note/jquery を実行しとく
    await this.driver.get("http://localhost:5000/add_element_by_timer")

    // タイマーで3秒後に出現する要素
    const selector = { xpath: "/html/body/p" }

    // 出現まで待ってからの要素取得
    await this.driver.wait(until.elementLocated(selector), 4000)
    const element = await this.driver.findElement(selector)
    const text = await element.getText()
    console.log(text)

    // 待たないで取得すると例外発生
    // await this.driver.findElement(selector)
  }

  public main = async (): Promise<void> => {
    await this.doSomethingOnLocalhost()
  }
}

new Driver().main()
