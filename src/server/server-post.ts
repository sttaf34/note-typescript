import * as http from "http"

const listener = (
  request: http.IncomingMessage,
  response: http.ServerResponse
): void => {
  if (request.method === "GET") {
    response.end("Hello GET Request.")
  }

  let body = ""
  request.on("data", (chunk: string): void => {
    console.log(`chunk -> ${chunk}`)
    body += chunk
  })
  request.on("end", (): void => {
    console.log("REQUEST HEADER")
    console.log(request.headers)
    console.log("REQUEST BODY")
    console.log(body)
    response.end("Hello POST Request.\n")
  })
}

const port = 7000
const server = http.createServer(listener)
server.listen(port)
console.log(`listening on ${port}!`)

// ts-nodeで動かすと待機状態になる
// ブラウザからlocalhost:7000でアクセスできる
// ログに2回出力されるのは、ブラウザがfaviconを見に行ってるため
// http://www.tohoho-web.com/ex/nodejs.html#get_get_params
// curl -X POST -d 'name=Alice' http://localhost:7000/
