# https://github.com/typicode/json-server
# json を DB として REST なサーバを起動できる！

# サーバ起動しといて……
cd ~/Projects/note-typescript && yarn db

# GET でいろいろ取得
curl -X GET http://localhost:23306/animals
curl -X GET http://localhost:23306/animals/5

# POST でデータ追加できて、ファイルも変更される
curl -X POST http://localhost:23306/animals/ -d 'name=human&age=38'

# HTTPレスポンスを確認してみると
# Content-Type: application/json; charset=utf-8
curl -I GET http://localhost:23306/animals

# 変更
curl -X PATCH http://localhost:23306/animals/101 -d 'name=human&age=99'

# 削除
curl -X DELETE http://localhost:23306/animals/22
