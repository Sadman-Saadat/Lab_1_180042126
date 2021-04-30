//Synchronous and Asynchronouos Function

//readfile
//writefile
//Appendfile
//Delete
//Rename

const fs = require("fs");

fs.writeFileSync('./Contents/demoFile.txt', 'We are learning nodeJs.');
fs.appendFileSync('./Contents/demoFile.txt', 'We are learning nodeJs.');

// fs.rename('contents/demoFile.txt','contents/renamedFile.txt', (err)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Rename Successful");
//     }
// });

console.log("before");

fs.readFile('contents/renamedFile.txt', "utf-8", (err, data)=>{
    if(err){
        console.log(err);
    } else {
        fs.appendFileSync(
            "./contents/renamedFile.txt", "Is this a synchronous process?"
        );
        fs.readFile("./Contents/renamedFile.txt", "utf-8", (err, data)=>{
            if(err){
                console.log(err);
            } else{
                console.log(data);
            }
        });
    }
});

console.log("after");

fs.unlink("./Contents/renamedFile.txt", (err)=>{
    if(!err){
        console.log("Deleted successfully");
    }
});