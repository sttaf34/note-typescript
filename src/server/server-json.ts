import * as http from "http"

const listener = (
  request: http.IncomingMessage,
  response: http.ServerResponse
): void => {
  switch (request.url) {
    case "/good": // 有効なJSONを返す
      response.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
      })
      response.end('{"name": "apple", "isSweet": true}')
      return
    case "/bad": // 無効なJSONを返す
      response.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
      })
      response.end('{"name": "japan", "isS": tru')
      return
    default:
      response.end("")
  }
}

const port = 6800
const server = http.createServer(listener)
server.listen(port)
console.log(`listening on ${port}!`)
