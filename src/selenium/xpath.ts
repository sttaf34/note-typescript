import { Capabilities, Builder, WebDriver } from "selenium-webdriver"

class Driver {
  private driver!: WebDriver

  private setup = async (): Promise<void> => {
    const capabilities = Capabilities.chrome()
    capabilities.set("chromeOptions", {
      args: [`--headless`]
    })
    this.driver = await new Builder().withCapabilities(capabilities).build()
  }

  private log = async (xpath: string): Promise<void> => {
    const element = await this.driver.findElement({ xpath })
    const text = await element.getAttribute("innerHTML")
    console.log("text -> ", text)
  }

  private doSomethingOnWikipedia = async (): Promise<void> => {
    await this.driver.get("https://ja.wikipedia.org/")

    // idで取得
    await this.log("//*[@id='p-namespaces-label']")

    // classの場合、完全一致でなくて、含むか否かの判定になる
    await this.log("//h1[contains(@class, 'firstHeading')]")

    // ルートからたどって取得
    await this.log("/html/body/div[5]/div[1]/div[2]/div[1]/ul/li[2]/a")
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
    const div = await p.findElement({ xpath: "../../div" })
    const divText = await div.getAttribute("innerHTML")
    console.log("text -> ", divText)
  }

  public main = async (): Promise<void> => {
    await this.setup()
    await this.doSomethingOnWikipedia()
    await this.doSomethingOnExample()
  }
}

const driver = new Driver()
driver.main()
