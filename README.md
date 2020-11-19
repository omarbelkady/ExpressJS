## ExpressJS
#### What It Is?
- Wep Application development framework based on NodeJS
- Small Framework that does not slow your app down

#### What It Does
- Takes care of a lot of common tasks when building a web app:
   - parsing Requests
   - Routing
   - Error Handling


#### Why Use It?
- Fast
- Minimal - Provides you only with the fundamental features for your app
- Unopinioated - no default configurations in order for your to structure your app your own way
- Simple - very easy to use, very simple to: install, use and read documentation
- Unobtrusive - setup ExpressJS they way I want it to be used no prereq libs only libs of my choice

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
