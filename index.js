const express =require('express');
//common js modules
//es 2015 modules import express from 'express', react side
const app = express();//generate a new application, used to set up configuration(route handler)

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});
//enject environment info
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server is listening to port" + PORT);
});

//app object => server
//app.get/post/put/delete/patch route handler
//'/' => route
//req object representing the incoming request and info, res object