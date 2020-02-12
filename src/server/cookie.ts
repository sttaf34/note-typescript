import { IncomingMessage, ServerResponse, createServer } from "http"
import * as Moment from "moment"
import * as Cookies from "cookies"

const listener = (request: IncomingMessage, response: ServerResponse): void => {
  // リクエストに対して Cookie をセットする形
  const aMoment: Moment.Moment = Moment()
  const datetime: string = aMoment.format("YYYY-MM-DD HH:mm:ss")
  response.setHeader("Set-Cookie", `last_access=${datetime}`)

  const cookies = new Cookies(request, response)
  if (!cookies.get("a_cookie_key")) {
    cookies.set("a_cookie_key", datetime)
  }

  // 直前にセットした Cookie をレスポンスで返している
  response.end(request.headers.cookie)
}

const server = createServer(listener)
server.listen("5000")
console.log("Start serving http://localhost:5000")
