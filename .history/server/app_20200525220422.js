const express = require("express");
const app = express();

const mongoose = require("mongoose");
const PORT = 5000;
const { MONGOURI } = require("./keys");

/* 
Express middleware = This are functions that execute during the lifecycle of a request to the express server
 Each middleware has access to the HTTP request and response for each route (or path) it’s attached to. 
 In fact, Express itself is compromised wholly of middleware functions. 
 Additionally, middleware can either terminate the HTTP request or pass it on to another middleware function using next. 
 This “chaining” of middleware allows you to compartmentalize your code and create reusable middleware. 
 https://developer.okta.com/blog/2018/09/13/build-and-understand-express-middleware-through-examples
*/
//  connecting with the DB
mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
    console.log("connected to mongo yeah");
});
mongoose.connection.on("error", err => {
    console.log("error connecting", err);
});

app.listen(PORT, () => {
    console.log("Server have started on", PORT);
});