const express = require("express");
const app = express();
const PORT = 5000;

/* 
Express middleware = This are functions that execute during the lifecycle of a request to the express server
 Each middleware has access to the HTTP request and response for each route (or path) it’s attached to. 
 In fact, Express itself is compromised wholly of middleware functions. 
 Additionally, middleware can either terminate the HTTP request or pass it on to another middleware function using next. 
 This “chaining” of middleware allows you to compartmentalize your code and create reusable middleware.
*/

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(PORT, () => {
    console.log("Server have started on", PORT);
});