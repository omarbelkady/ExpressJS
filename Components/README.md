### ExpressJS Components(most imp)
- Request: builds a req object auto, gets populated with imp data such: methods, headers, etc.
- Response: builds a res object which is a HTTP response that gets sent back to the user. Take care of proc req and conv text 
into appropriate format and then sends it back to client
- Middleware: A function that gets called during Request-Response cycle and has access to resp and requ objects
- Error Handling: Express comes prepackaged with error handling that will catch any sync/asynch error
- Template: unopionated meaning I can use any templating language: ejs(embedded javascript), jade, etc.
- DB: I can connect to any db using my ExpressJS app by loading the appropriate NodeJS driver for the DB

