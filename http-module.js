const http = require('http');
const load = require('./loadContent');

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.write(load.index);
        res.end();
    }

    else if(req.url == "/about"){
        res.write(load.about);
        res.end();
    }

    else if(req.url == "/blog"){
        res.write(load.blog);
        res.end();
    }

    else if(req.url == "/contact"){
        res.write(load.contact);
        res.end();
    }

    else if(req.url == "/pricing"){
        res.write(load.pricing);
        res.end();
    }

    else if(req.url == "/services"){
        res.write(load.services);
        res.end();
    }

    else if(req.url == "/work"){
        res.write(load.work);
        res.end();
    }

    else{
        res.write("<h1>This Page doesn't exist</h1><br><a href = '/'>Go to Base</a>");
        res.end();
    }
});

module.exports = {server};