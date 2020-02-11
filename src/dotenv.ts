import { config } from "dotenv"

// プロジェクトのルートに .env を置いといて
// WIDTH=480 等と書いておくと、読み込める
config()

console.log(process.env)
