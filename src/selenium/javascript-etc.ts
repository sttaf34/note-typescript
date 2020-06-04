/* eslint-disable no-useless-escape */
/* eslint-disable prettier/prettier */

import { Capabilities, Builder, WebDriver } from "selenium-webdriver"

import { sleep } from "../useful-functions"

class Driver {
  private driver!: WebDriver

  private setup = async (): Promise<void> => {
    const capabilities = Capabilities.chrome()
    this.driver = await new Builder().withCapabilities(capabilities).build()
  }

  private log = async (
    xpath: string,
    attribute = "innerHTML"
  ): Promise<void> => {
    const element = await this.driver.findElement({ xpath })
    const text = await element.getAttribute(attribute)
    console.log("text -> ", text)
  }

  // いろんな JavaScript の実行
  private doSomethingOnWikipedia = async (): Promise<void> => {
    await this.driver.get("https://ja.wikipedia.org/")

    // 最下部にスクロール
    const scriptA = "window.scrollTo(0, document.body.scrollHeight);"
    await this.driver.executeScript(scriptA)
    await sleep(3 * 1000)

    // 上がより見える方向にスクロール
    const scriptB = "window.scrollBy(0, -500);"
    await this.driver.executeScript(scriptB)
    await sleep(3 * 1000)

    // 下がより見える方向にスクロール
    const scriptC = "window.scrollBy(0, 500);"
    await this.driver.executeScript(scriptC)
    await sleep(3 * 1000)

    // 要素を除去
    const scriptD = "document.getElementById('footer').remove();"
    await this.driver.executeScript(scriptD)
    await sleep(3 * 1000)

    // アラートを出現、フォーカス、OKする
    const scriptE = "window.alert('こんにちは');"
    await this.driver.executeScript(scriptE)
    const alert = await this.driver.switchTo().alert()
    await alert.accept()
    await sleep(3 * 1000)
  }

  private doSomethingOnLocalhostQuote = async (): Promise<void> => {
    await this.driver.get("http://localhost:5000/input-for-selenium")

    // 文字列を追加
    const scriptA = "document.getElementById('textarea').value += 'あああ'"
    await this.driver.executeScript(scriptA)
    await sleep(500)

    // シングルクォート文字列を追加
    // Chrome DevTools > console で実行するならば、
    // document.getElementById('textarea').value += '\'シングル\''
    const scriptB =
      "document.getElementById('textarea').value += '\\'シングル\\''"
    await this.driver.executeScript(scriptB)
    await sleep(500)

    // ダブルクォート文字列を追加・文字列の囲みがシングルクォート
    // Chrome DevTools > console で実行するならば、
    // document.getElementById("textarea").value += "\"ダブル\""
    const scriptC = 'document.getElementById("textarea").value += "\\"ダブル\\""'
    await this.driver.executeScript(scriptC)
    await sleep(500)

    // ダブルクォート文字列を追加・文字列の囲みがダブルクォート
    const scriptD = "document.getElementById('textarea').value += '\"ダブル\"'"
    await this.driver.executeScript(scriptD)
    await sleep(500)

    // 両方を追加
    const scriptE =
      "document.getElementById('textarea').value += '【\\'シングル\\'】【\"ダブル\"】'"
    console.log(scriptE)
    await this.driver.executeScript(scriptE)
    await sleep(500)

    // 取得した「クォートが含まれる文字列」を追加
    // ↑の文字列リテラルで書いている JavaScript と同じになるように置換してる形
    const p = await this.driver.findElement({ id: "quote"})
    const quoteText = await p.getText()
    const replacedText = quoteText.replace(/'/g, "\\'").replace(/"/g, "\"")
    const scriptF =
      `document.getElementById('textarea').value += '${replacedText}'`
    console.log(scriptF)
    await this.driver.executeScript(scriptF)
    await sleep(3 * 1000)
  }

  public main = async (): Promise<void> => {
    await this.setup()
    // await this.doSomethingOnWikipedia()
    await this.doSomethingOnLocalhostQuote()
  }
}

const driver = new Driver()
driver.main()
