import { IncomingMessage, ServerResponse, createServer } from "http"
import { renderFile } from "pug"

const listener = (request: IncomingMessage, response: ServerResponse): void => {
  response.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  })

  // このファイルからの相対パスでなくて、
  // ts-node実行したときのカレントディレクトリからのパス
  response.write(
    renderFile("./assets/form.pug", {
      path: request.url,
    })
  )
  response.end()
}

const server = createServer(listener)
server.listen("5000")
console.log("Start serving http://localhost:5000")
