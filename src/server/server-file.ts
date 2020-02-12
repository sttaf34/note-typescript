import { IncomingMessage, ServerResponse, createServer } from "http"
import { createReadStream } from "fs"

const onPost = (request: IncomingMessage, response: ServerResponse): void => {
  let body = ""
  request.on("data", (chunk: string): void => {
    body += chunk
  })
  request.on("data", (): void => {
    const decodedBody = decodeURIComponent(body)
    console.log(body)
    console.log(decodedBody)
    response.end(`${decodedBody}が選択されました`)
  })
}

const listener = (request: IncomingMessage, response: ServerResponse): void => {
  response.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  })

  switch (request.method) {
    case "GET":
      createReadStream("./assets/form.html").pipe(response)
      break
    case "POST":
      onPost(request, response)
      break
    default:
      break
  }
}

const server = createServer(listener)
server.listen("5000")
console.log("Start serving http://localhost:5000")
