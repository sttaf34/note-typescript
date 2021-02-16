import axios from "axios"

const sampleA = async (): Promise<void> => {
  // 正常
  const url = "https://qiita.com/api/v2/tags?page=1&sort=count"

  // エラーになる
  // const url = "https://qiita.com/api/v2/tags?page=-1"

  let response
  try {
    response = await axios.get(url)
  } catch (error) {
    if (error.response === undefined) {
      console.log("インターネット接続がない")
    } else {
      console.log("何かしらのエラー")
      console.log(error)
    }
    return
  }

  // 正常
  console.log(response)
}
sampleA()
