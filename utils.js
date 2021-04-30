const Hellofunc = require("./helloWorld");

//console.log(Hellofunc.name);

//Hellofunc.Hello();

//setInterval

setInterval(()=>{
    Hellofunc.Hello();
}, 1000);

setTimeout(()=>{
    console.log(Hellofunc.name);
}, 5000);