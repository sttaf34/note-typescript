import * as http from "http"
import * as url from "url"
import * as process from "child_process"

const listener = (
  request: http.IncomingMessage,
  response: http.ServerResponse
): void => {
  if (request.url === "/service-worker.js" || request.url === undefined) {
    response.end("")
    return
  }
  const parsedUrlQuery: url.UrlWithParsedQuery = url.parse(request.url, true)
  const object = parsedUrlQuery.query

  console.log(request.url)
  console.log(object)

  if (typeof object.command === "string") {
    process.exec(
      object.command,
      (error: process.ExecException | null, stdout: string, stderr: string) => {
        response.end(`[stdout] \n${stdout}\n\n[stderr] => ${stderr}`)
      }
    )
    return
  }
  response.end("")
}

const server = http.createServer(listener)
server.listen("5200")

// OSコマンド脆弱性が含まれているサーバ
// http://localhost:5200/?key=123&command=pwd
// http://localhost:5200/?key=123&command=ls
// パラメータで受け取った引数をそのまま exec しているので、何でも実行し放題
