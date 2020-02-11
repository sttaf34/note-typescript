import * as http from "http"
import * as url from "url"

const listener = (
  request: http.IncomingMessage,
  response: http.ServerResponse
): void => {
  if (request.url === undefined || request.url === "/favicon.ico") {
    response.end("")
    return
  }

  const parsedUrlQuery: url.UrlWithParsedQuery = url.parse(request.url, true)
  const object = parsedUrlQuery.query

  // http://localhost:5100/?key=123&age=38 でアクセスすると、
  // { key: '123', age: '38' } とオブジェクトで取れる
  console.log(request.url)
  console.log(object)
  console.log("")
  response.end("")
}

const port = 5100
const server = http.createServer(listener)
server.listen(port)
console.log(`listening on ${port}!`)
