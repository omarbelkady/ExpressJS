const express = require("express");
//creating the express instance
const app = express();

//configuring the ejs setup by setting view engine to ejs
//Instructing Express to use EJS for any templates I load
app.set("view engine", "ejs");


/*Creating a route by using the response.render and 
		I pass in the name of the view to render
		and I also pass in some dynamic data too
*/
app.get("/", (request, response) => response.render("index.ejs",{
	'name': "CS375 Fanboy", 
}));

//Listening on a specific port
app.listen(8000, ()=> console.log("Listening on Port 8000"));

