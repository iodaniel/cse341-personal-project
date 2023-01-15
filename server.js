const express = require('express');
const server = express();

const bodyParser = require('body-parser');
const mongodb = require('./db/connect');


const port = process.env.PORT || 8082;

server.use(bodyParser.json()).use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
 .use('/', require('./routes'));
  mongodb.initDb((err, mongodb)=>{
    if(err){
        console.log(err);
    }else{}
        server.listen(port); {
        console.log(`Connected to Database and Listening in port ${port}`);
        }
});
