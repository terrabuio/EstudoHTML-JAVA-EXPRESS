//após o express instalado usando npm install express --s
const express = require ("express");

const app = express ();


app.get("/", function(req,res){
    res.status(200).sendFile(__dirname +"/html/index.html");
})
//essa é a rota quando se abre o localhost/ criaremos agora mais rotas

app.get("/about", function(req,res){
    res.status(200).sendFile(__dirname + "/html/about.html");
})

app.get("/jogodaveia", function(req,res){
    res.status(200).sendFile(__dirname + "/html/jogodaveia.html");
})

//criando rotas com parâmetros
app.get("/ola/:nome/:cargo/:cor",function(req,res){
    res.status(200).send("<h1>olá " +req.params.nome+"</h1>"+"<h2> seu cargo é:"+req.params.cargo+"<h2>"+"<h3> sua cor favorita é :"+req.params.cor+"<h3>");

})
//o usuário passa os parâmetros
//o .send so pode ser enviado uma vez

//cria uma instância para a variavel "app", melhor utilizar "const"
app.listen(8081,function(){
    console.log("servidor rodando na url http://localhost:8081");
});
//essa função deve ser a última do código, programar acima dela