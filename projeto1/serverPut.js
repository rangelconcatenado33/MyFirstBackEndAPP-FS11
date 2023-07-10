
const express = require('express');

const app = express();

const router = express.Router();

const fs = require('fs');

const bancoDeDados = require('./bancoDeDadosNode')

const caminho = require('path');
const { error } = require('console');
const { throws } = require('assert');

router.get('/form', (req,res)=>{

    res.sendFile(caminho.join(__dirname + "/pages/index.html"))

});

app.use(router);

//Recebendo Dados

app.use(express.json())


app.put('/api/server/fs11', (req, res)=>{

    const dados = req.body;

    bancoDeDados(dados)

    fs.appendFileSync('Dados-do-usuario.txt', JSON.stringify(dados), (error, arquivo)=>{

        error? console.log(error): console.log("Processamento de dados realizado.")

    })

    res.status(200).send("Dados recebidos com sucesso")

})

app.listen(8080, ()=>{

    console.log("App rodando!")

    console.log("localhost:8080");

})