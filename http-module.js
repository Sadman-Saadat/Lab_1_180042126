const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.write("<h1>This is base url</h1>");
        res.end();
    }

    else if(req.url == "/home"){
        res.write("<h1>This is Home Page.</h1>")
        res.end();
    }
    else{
        res.write("<h1>This Page doesn't exist</h1><br><a href = '/'>Go to Base</a>");
        res.end();
    }
});

module.exports = {server};