## ExpressJS

- routing and middleware web framework For NodeJS

### How To Install
```bash
npm install express --save
```

### Different HTTP Requests You Can Make

##### How To Make A Get Request
```js
app.get('/', function (req, res) {
  res.send('This is a get request!')
})
```

##### How To Make A Post Request
```js
app.post('/', function (req, res) {
  res.send('This is a post request')
})
```

##### How To Make A Delete Request
```js
app.delete('/user', function (req, res) {
  res.send('Deleting the user: /user')
})
```

##### How To Make A Put Request
```js
app.put('/user', function (req, res) {
  res.send('Just Made a PUT request for /user')
})
```