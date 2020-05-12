/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

import { Capabilities, Builder, WebDriver } from "selenium-webdriver"

import { sleep } from "../useful-functions"

class Driver {
  private driver!: WebDriver

  private setup = async (): Promise<void> => {
    const capabilities = Capabilities.chrome()
    this.driver = await new Builder().withCapabilities(capabilities).build()
  }

  private experimentA = async (): Promise<void> => {
    // 1つ目のタブ
    await this.driver.get("https://example.com/")

    // 2つ目のタブを開く
    await this.driver.executeScript("window.open('', '_blank')")

    // ブラウザ上の見た目の表示としては2つ目のタブにフォーカスがあるが、
    // this.driver の見ているタブは自動的には切り替わらないので、
    // https://example.com/ の方の要素が取得できる
    const p = await this.driver.findElement({ xpath: "/html/body/div/p[2]" })
    const text = await p.getText()
    console.log(text)

    // 各タブを切り替えながら URL を根拠にして
    // this.driver の見ているタブの切り替えを完了する
    const handles = await this.driver.getAllWindowHandles()
    for (const handle of handles) {
      await this.driver.switchTo().window(handle)
      const currentUrl = await this.driver.getCurrentUrl()
      if (currentUrl === "about:blank") {
        break
      }
    }

    // 2つ目のタブ上で開くことになるはず
    await this.driver.get("https://www.google.com/")
    await sleep(5000)
  }

  private experimentB = async (): Promise<void> => {
    // 1つ目のタブ
    await this.driver.get("https://example.com/")

    // 2つ目のタブを開く
    await this.driver.executeScript("window.open('', '_blank')")

    // 2つ目のタブ上で開くことになると思いきや、そうはならない
    // 1つ目のタブの方で開かれる
    await this.driver.get("https://www.google.com/")
    await sleep(5000)
  }

  // 新しいタブで URL を開くメソッド
  public openUrlInNewTab = async (url: string): Promise<void> => {
    await this.driver.executeScript("window.open('', '_blank')")

    const handles = await this.driver.getAllWindowHandles()
    for (const handle of handles) {
      await this.driver.switchTo().window(handle)
      const currentUrl = await this.driver.getCurrentUrl()
      if (currentUrl === "about:blank") {
        break
      }
    }

    await this.driver.get(url)
  }

  private experimentC = async (): Promise<void> => {
    await this.driver.get("https://example.com/")
    await this.openUrlInNewTab("https://www.google.com/")
    await sleep(5000)
  }

  public main = async (): Promise<void> => {
    await this.setup()
    // await this.experimentA()
    // await this.experimentB()
    await this.experimentC()
  }
}

const driver = new Driver()
driver.main()
