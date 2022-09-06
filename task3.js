const fs = require ('fs')
fs.readFile('welcome.txt',function(err,data){
if (err)
    return console.log(error);

     console.log(data.toString());

});

