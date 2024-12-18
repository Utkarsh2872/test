//writing the backend code for a http server using express:

const express = require('express')
const bodyParser = require("body-parser");
const app = express() //called the express function which returned an app object
const port = 3001 //where the application is being host

app.use(bodyParser.json()); //allows to extract the json that we have sent in the body of the request


app.get('/', (req, res) => { //two parameters : the route handler and a callback function .. req contains details about the request like headers, body, query parameters etc and res object provides details about the response we want to send
    res.send('I created this server')
})

app.get('/trial',(req,res) => {
    const message = req.body.message;
    console.log(message);
    res.status(200).json({ //sending a json as response along with a status code
        output : "Trying this out"
    })
})

app.listen(port, () => {
    console.log(`This app is listening on port ${port}`);
})  // we pass the port that the express app listens on. Our app or process has captured this port now, it can't be used by any other process