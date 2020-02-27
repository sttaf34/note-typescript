import { Capabilities, Builder, WebDriver } from "selenium-webdriver"

class Driver {
  private driver!: WebDriver

  private setup = async (): Promise<void> => {
    const capabilities = Capabilities.chrome()
    this.driver = await new Builder().withCapabilities(capabilities).build()
  }

  private doSomethingOnLocalhost = async (): Promise<void> => {
    // TODO: wait, until の使い方を説明するのに便利そうなHTMLを用意する
  }

  public main = async (): Promise<void> => {
    await this.setup()
    await this.doSomethingOnLocalhost()
  }
}

new Driver().main()
