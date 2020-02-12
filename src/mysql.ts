import * as mysql from "mysql"

// Docker かなにかで MySQL サーバが動いているとして
const connection: mysql.Connection = mysql.createConnection({
  host: "192.168.99.100",
  port: 3306,
  user: "root",
  password: "password"
})

connection.connect((error: mysql.MysqlError): void => {
  if (error == null) {
    console.log(`connected as id ${connection.threadId}`)
  } else {
    console.error(`error connectiong${error.stack}`)
  }
})

const show = "SHOW DATABASES"
connection.query(show, (error, results, fields) => {
  console.log(error)
  console.log(results)
  console.log(fields)
})
