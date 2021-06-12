## Cookies

- Data sent to the client side from the server and stored on the client side
- To use Cookies in ExpressJS we use a library called cookie-parser
- To create a cookie I must set a route for it

```js
var ckpars = require("cookie-parser");
var app = require("express");
app.get("/", function(request, response){
    response.cookie("name","express").send("cookie-set");
});

app.listen(3000);

```


### How To Add Cookies with an expiration date
```js
var ckpars = require("cookie-parser");
var app = require("express");
app.get("/", function(request, response){
    response.cookie(name,"val",{expire: 420000 + Date.now()});//expire 7 mins from now
});

app.listen(3000);
```

### How To Delete Existing Cookie
```js
var express = require('express');
var app = express();

app.get('/clear_cookie', function(request, response){
   response.clearCookie('foo');
   response.send('cookie foo cleared');
});

app.listen(3000);
```