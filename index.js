var express = require('express');
var app = express();


app.get('/', (request, response) => {
    response.send("Success from he server");
})



app.listen(3000, (error) => {

    if (error) {
        console.log("Server have issue running");
    } else {
        console.log("Server is up and running");
    }
});