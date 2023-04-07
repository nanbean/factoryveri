# factoryveri

## How to generate key

Below command will generate 'private.key', 'public.key'
```
$ node generatekey.js
```

## How to install

```
$ npm install
```

## How to run server
```
$ node app.js
```

## How to test rest api
```
$ curl -H "Content-Type: application/json" -X POST -d '{"mac":"00:00:00:00:00:00","password":"1234"}' http://localhost:3000/verify
```

## How to decrypt token
copy token to encrypted.txt
```
$ node decrypt.js
```
