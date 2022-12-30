var http = require('http');

//http.createServer().listen(8081);
 //até agora, o servidor so foi criado, não mandamos ele fazer nada.

 
http.createServer(function(req , res){
    res.end("hello")
}).listen(8081);
//Cria o servidor ,o .listen diz qual porta eu vou utilizar(normalmente o Skype usa a 80), a funcão req , res.end faz com que
//tenhamos um comportamento do servidor

console.log("servidor rodando")
//não pode usar acentos infelizmente

//entrar no servidor local= localhost:8081



