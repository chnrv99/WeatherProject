const express = require('express')
//https module helps us make get requests, default available in node
const https = require('https')
//so basically we are going to get a request from the client, upon receiving the request, we will send back the request to openweather api..
//we are using https module to send get requests to openweather website..  

const app = express()

//this req/res is for the client.. not for openweather..
app.get('/',(req,res)=>{
    //as soon as the user makes a get request to this node server, we will send another get request to the openweather down below..

    const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=12.837832&lon=80.162445&appid=d6d162c99b2f9d8701774b830e8f6036'
    https.get(url,(response)=>{
        //we are printing the response..
        console.log(response)
        console.log(response.statusCode)

        response.on("data", (data)=>{
            //prints the receieved weather data on hexadecimal(json converted to hex)
            console.log(data)
            //JSON.parse will convert any data type to json.. in this case, from hex to json
            const weatherData=JSON.parse(data)

            const temp = weatherData.name.


        })
    } )

    res.send("Server is running")
})

//listening on port 3000
app.listen(3000)