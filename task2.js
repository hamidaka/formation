var http =require('http')
http.createServer(function(request,response){
    response.write('<h1>hello word</h1>');
    response.end();

}).listen(3000);
console.log('en ecoute');