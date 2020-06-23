import * as http from "http"

const listener = (
  request: http.IncomingMessage,
  response: http.ServerResponse
): void => {
  if (request.url === undefined || request.url === "/favicon.ico") {
    response.end("")
    return
  }

  // http://localhost:5100/日本語
  // http://localhost:5100/%E6%97%A5%E6%9C%AC%E8%AA%9E
  if (request.url === "/%E6%97%A5%E6%9C%AC%E8%AA%9E") {
    response.end("Japanese")
    return
  }

  response.end("")
}

const port = 5100
const server = http.createServer(listener)
server.listen(port)
console.log(`listening on ${port}!`)
