import { Builder, WebDriver } from "selenium-webdriver"

class Driver {
  private driver: WebDriver

  public constructor() {
    this.driver = new Builder().forBrowser("chrome").build()
  }

  private log = async (
    xpath: string,
    attribute = "innerHTML"
  ): Promise<void> => {
    const element = await this.driver.findElement({ xpath })
    const text = await element.getAttribute(attribute)
    console.log("text -> ", text, "\n")
  }

  private isFound = async (xpath: string): Promise<boolean> => {
    const elements = await this.driver.findElements({ xpath })
    return new Promise((resolve): void => {
      resolve(elements.length > 0)
    })

    // findElement で存在しない selector を指定すると例外が発生する
    // await this.driver.findElement({ xpath: "/html/body/pre/pre/pre" })
  }

  // いろんな xpath の指定の仕方
  // 取れるかどうかの試行錯誤は、Chrome DevTools > Console で
  // $x("//*[@id='p-namespaces-label']") とかすると良い
  // https://ja.wikipedia.org/ の HTML が変わると動かなくなる
  private doSomethingOnWikipedia = async (): Promise<void> => {
    await this.driver.get("https://ja.wikipedia.org/")

    // idで完全一致で取得
    await this.log("//*[@id='p-namespaces-label']")

    // class名の完全一致で取得
    await this.log("//h1[@class='firstHeading']")

    // class名の部分一致で取得
    await this.log("//h1[contains(@class, 'firstHead')]")

    // name名の完全一致で取得
    await this.log("//input[@name='search']", "title")

    // ルートからたどって取得
    await this.log("/html/body/div[5]/div[1]/div[2]/div[1]/ul/li[2]/a")

    // 兄弟要素の最後を取得
    await this.log("//div[@id='mf-tfa']/ul/li[last()]")

    // 兄弟要素の先頭を取得
    await this.log("//div[@id='mf-tfa']/ul/li[1]")
  }

  private doSomethingOnWikipediaText = async (): Promise<void> => {
    await this.driver.get("https://ja.wikipedia.org/")

    // class名の完全一致、かつ、テキストの部分一致
    await this.log("//a[@class='mw-jump-link' and contains(text(), '検索')]")

    // テキストの部分一致の否定
    await this.log("//a[not(contains(text(), '検索'))]", "outerHTML")

    // テキストの完全一致
    await this.log("//a[text()='検索に移動']")
  }

  private doSomethingOnExample = async (): Promise<void> => {
    // <body>
    //   <div>
    //     <h1></h1>
    //     <p></p>
    //     <p>
    //       <a></a>
    //     </p>
    //   </div>
    // </body>
    // 2020-01-10 の段階では↑のような構造になっていた
    await this.driver.get("http://example.com/")

    // 階層下
    const p = await this.driver.findElement({ xpath: "/html/body/div/p[2]" })
    const a = await p.findElement({ xpath: "./a" })
    const aText = await a.getAttribute("innerHTML")
    console.log("text -> ", aText)

    // 階層上
    const h1 = await p.findElement({ xpath: "../../div/h1" })
    const h1Text = await h1.getAttribute("innerHTML")
    console.log("text -> ", h1Text)

    // 階層上をタグ名指定なしで
    const div = await p.findElement({ xpath: ".." })
    const divText = await div.getAttribute("innerHTML")
    console.log("text -> ", divText)

    // 存在判定
    const isFound = await this.isFound("/html/body/div/p[222]")
    console.log("isFound -> ", isFound)
  }

  public main = async (): Promise<void> => {
    // await this.doSomethingOnWikipedia()
    await this.doSomethingOnWikipediaText()
    // await this.doSomethingOnExample()
  }
}

const driver = new Driver()
driver.main()
