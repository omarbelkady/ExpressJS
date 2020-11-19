## Routing 
- ExpressJS comes with a built-in router that allows us to write code handling req to a partic route effectively

- Router has methods to respond to any of the eight HTTP Methods where each of the listed methods below is used to perform a specific action on the server
	- GET: retrieve data from a web server depending on specific parameters in the URL
	- POST: send data to a server: file update, form data, etc. 
	- HEAD(similar to GET): only diff is that server replies with a response line with headers AND NO BODY
	- OPTIONS: find out the HTTP methods and other options supported by a web server
	- PUT: used to request the server to store the included entity body at a specific location supplied in the URL
	- DELETE: request the server to delete a file at a specific location supplied in the URL
	- PATCH: used to send some to partially replace an entity(aka blog post) on the server

If the web server is not supposed to respond to a specific request the server will respond with a 404 error
- Example
```
An unauthenticated user types in the url https://www.yourdomainname.com/login server will respond with 404 
error because user is not authenticated
```

##### When to use patch Example
```
Notice a typo in blog post and wish to fix the errors.
```
