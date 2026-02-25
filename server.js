const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Permite que seu portfólio acesse o servidor
app.use(express.json()); // Permite ler os dados JSON que você criou no script

// ROTA que recebe o seu formulário
app.post('/contato', (req, res) => {
    const dados = req.body;
    
    console.log("Chegou uma nova mensagem do Portfólio!");
    console.log("Nome:", dados.nome);
    console.log("Mensagem:", dados.mensagem);

    // Aqui, no futuro, você conectaria um Banco de Dados
    res.status(200).send({ status: "Sucesso", msg: "Mensagem recebida pelo servidor!" });
});

app.listen(3000, () => {
    console.log("Servidor Back-end rodando na porta 3000");
});