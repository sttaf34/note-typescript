import { IncomingMessage, ServerResponse, createServer } from "http"

const listener = (request: IncomingMessage, response: ServerResponse): void => {
  // 302 Found
  // https://developer.mozilla.org/ja/docs/Web/HTTP/Status/302
  response.writeHead(302, {
    Location: "https://www.nnn.ed.nico/"
  })
  response.end()
}

const server = createServer(listener)
server.listen("5000")
console.log("Start serving http://localhost:5000")
