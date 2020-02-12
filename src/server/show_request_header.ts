import * as http from "http"

const listener = (
  request: http.IncomingMessage,
  response: http.ServerResponse
): void => {
  if (request.url === "/service-worker.js") {
    response.end("")
    return
  }
  if (request.url == null) {
    response.end("")
    return
  }
  // 生の HTTP リクエストヘッダの表示
  response.end(request.rawHeaders.join("\n"))
}

const port = 6400
const server = http.createServer(listener)
server.listen(port)
console.log(`listening on ${port}!`)
