import { IncomingMessage, ServerResponse, createServer } from "http"

const listener = (request: IncomingMessage, response: ServerResponse): void => {
  if (request.method === "GET") {
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.end("Hello GET Request.")
    return
  }

  // preflight リクエストに対応する処理
  if (request.method === "OPTIONS") {
    console.log(request.method, request.headers)
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.setHeader("Access-Control-Allow-Headers", "Content-Type")
    response.end("Hello OPTIONS Request.")
    return
  }

  // preflight リクエスト後の POST に対応する処理
  let body = ""
  request.on("data", (chunk: string): void => {
    body += chunk
  })
  request.on("end", (): void => {
    console.log(request.method, request.headers, body)
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.end("Hello POST Request.")
  })
}

const port = 7400
createServer(listener).listen(port)
console.log(`listening on ${port}!`)
