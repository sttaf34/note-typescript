//
// 読み取り専用なオブジェクトの配列を用意したい！
//

{
  console.log("要素がプリミティブ型な配列の場合")
  const numbers = [1, 2, 3]
  const readonlyNumbers: ReadonlyArray<number> = numbers
  console.log(readonlyNumbers)

  // これチェックしてくれる
  // readonlyNumbers[0] = 3
}

{
  console.log("\n要素がオブジェクトな配列の場合・失敗")
  type User = {
    name: string
  }

  const users: User[] = [
    { name: "sttaf34" },
    { name: "sttaf34" },
    { name: "sttaf34" },
  ]
  const readonlyUsers: ReadonlyArray<User> = users
  console.log(readonlyUsers)

  // これはチェックしてくれる
  // readonlyUsers[0] = { name: "newUserName" }

  // これはチェックしてくれない
  const aUser = readonlyUsers[0]
  aUser.name = "newUserName"
  console.log(aUser)

  // 元の配列の中身も変わってしまう
  console.log(readonlyUsers)

  // まとめ
  // 配列の各要素は参照なわけで、
  // ReadonlyArray はその参照そのものの変更を見てくれる
  // 参照先のオブジェクトの中身までは見ない
}

{
  console.log("\n要素がオブジェクトな配列の場合・成功！")
  type User = {
    name: string
  }
  type ReadonlyUser = Readonly<User>

  // この書き方でも良いが、プロパティが多いときに readonly を沢山書くことになる
  // type User = {
  //   readonly name: string
  // }

  const users: ReadonlyUser[] = [
    { name: "sttaf34" },
    { name: "sttaf34" },
    { name: "sttaf34" },
  ]
  const readonlyUsers: ReadonlyArray<ReadonlyUser> = users
  console.log(readonlyUsers)

  // これはチェックしてくれる
  // readonlyUsers[0] = { name: "newUserName" }

  // これもチェックしてくれる
  // const aUser = readonlyUsers[0]
  // aUser.name = "newUserName"

  // まとめ
  // 配列の各要素は参照なわけで、
  // ReadonlyArray はその参照そのものの変更を見てくれる
  // 参照先のオブジェクトの中身までは見ない
  // 今回は、参照先のオブジェクトのプロパティを readonly にしたので
  // そのとおりに動いたということ
}

{
  console.log("\nプロパティに配列を持つオブジェクトの場合・失敗")
  type ReadonlyUser = {
    readonly name: string
    readonly friends: ReadonlyUser[]
  }

  const userA: ReadonlyUser = { name: "Michael", friends: [] }
  const userB: ReadonlyUser = { name: "Jackson", friends: [userA] }

  // これはチェックしてくれる
  // userB.name = "newUserName"

  // これはチェックしてくれる・配列のまるごと代入はチェックしてくれる
  // const aUser = userB.friends[0]
  // aUser.friends = []

  // これはチェックしてくれない・配列の各要素はチェックしてくない
  userB.friends[0] = { name: "Smith", friends: [] }
  console.log(userB)
}

{
  console.log("\nプロパティに配列を持つオブジェクトの場合・成功")
  type ReadonlyUser = {
    readonly name: string
    readonly friends: ReadonlyArray<ReadonlyUser>
  }

  const userA: ReadonlyUser = { name: "Michael", friends: [] }
  const readonlyFriends: ReadonlyArray<ReadonlyUser> = [userA]
  const userB: ReadonlyUser = { name: "Jackson", friends: readonlyFriends }
  console.log(userB)

  // これはチェックしてくれる
  // userB.name = "newUserName"

  // これもチェックしてくれる！
  // userB.friends[0] = { name: "Smith", friends: [] }
}

export {}
