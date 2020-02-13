# https://github.com/typicode/json-server

# サーバ起動しといて……
cd ~/Projects/note-typescript && yarn db

# GET でいろいろ取得
curl -X GET http://localhost:23306/animals
curl -X GET http://localhost:23306/animals/5

# POST でデータ追加できて、ファイルも変更される
curl -X POST http://localhost:23306/animals/ -d 'name=human&age=38'
