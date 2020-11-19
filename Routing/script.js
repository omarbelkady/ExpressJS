const express = require("express");

const app = express();
//Registering A Route For The Home Page
app.get("/", (req,res) => {
	res.end("Home Page");
});

//second route
app.get("/about", (req,res) => {
	res.end("About Us");
});


//third route
app.get("/cobol", (req,res) => {
	res.end("The Cobol/Pascal Programming Language is the best programming language for the 557-32 or 27-375 32!");
});

//fourth route
app.get("/llpfb", (req,res) => {
	res.end("2526 is a LLP Fanboy!");
});

//               callback method
app.listen(8000, () => console.log("Listening on port 8000 968 727225 32"));

//To use another request just simply do app.YOURSELECTEDHTTPREQ(req, res)
