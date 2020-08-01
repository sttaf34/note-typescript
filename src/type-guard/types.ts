export type Sales = {
  id: string
  price: number
}

type Page = {
  index: number
  body: string
}

export type Magazine = {
  title: string
  pages: Page[]
}
