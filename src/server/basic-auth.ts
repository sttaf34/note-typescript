import { IncomingMessage, ServerResponse, createServer } from "http"
import { createReadStream } from "fs"
import * as auth from "basic-auth"

const check = (name: string, pass: string): boolean => {
  return name === "alice" && pass === "pass"
}

const listener = (request: IncomingMessage, response: ServerResponse): void => {
  const credentials = auth(request)
  console.log("credentials -> ", credentials)
  if (!credentials || !check(credentials.name, credentials.pass)) {
    // このレスポンス返すと、ブラウザがダイアログ出すようになっている
    response.statusCode = 401
    response.setHeader("WWW-Authenticate", 'Basic realm="example"')
    response.end("Access denied")
  } else {
    createReadStream("./assets/form.html").pipe(response)
  }
}

const server = createServer(listener)
server.listen("5000")
console.log("Start serving http://localhost:5000")
