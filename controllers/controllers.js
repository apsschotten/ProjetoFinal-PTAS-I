// "Fetch" dos Produtos Já Cadastrados
const produtos = require('../src/produtos.json');

//GET Todos os Produtos
exports.fstPage = (req, res) => {
    res.json(produtos);
};

//GET um Produto (por ID)
exports.prodPage = (req, res) => {
    const id = parseInt(req.params.id);
    const item = produtos.find(p => p.id === id);
    if (!item) {
        res.send("Pelúcia não encontrada.");
    }
    res.json(item);
};

//POST de um Produto (+ Variável de Controle: "lastId")
var lastId = produtos[produtos.length - 1]?.id;

exports.registerPage = (req, res) => {
    const { nome, preço, estoque, imagem } = req.body;
    if (!nome || !preço || !estoque || !imagem) {
        res.send("Todos os campos são obrigatórios.");
    } else {
        if (isNaN(preço)) {
            res.send("O preço deve ser um número válido.");
        } else {
            if (isNaN(estoque)) {
                res.send("O estoque deve ser um número válido.");
            } else {
                lastId++;
                const novoProduto = { id: lastId, nome, preço, estoque, imagem };
                produtos.push(novoProduto);
                res.send("Pelúcia cadastrada com sucesso!");
            }
        }
    }
};

//PUT de um Produto (por ID)
exports.alterPage = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, preço, estoque, imagem } = req.body;

    const produto = produtos.find(p => p.id === id);
    if (!produto) {
        res.send("Pelúcia não encontrada.");
    } else {
        if (nome != null) produto.nome = nome;
        if (preço != null && preço > 0 && !isNaN(preço)) produto.preço = preço;
        if (estoque != null && !isNaN(estoque)) produto.estoque = estoque;
        if (imagem != null) produto.imagem = imagem;
        res.send("Produto alterado com sucesso!");
    }
};

//DELETE de um Produto (por ID)
exports.removePage = (req, res) => {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex(p => p.id === id);
    if (index === -1) {
        res.send("Pelúcia não encontrada.");
    } else {
        produtos.splice(index, 1);
        res.send("Pelúcia removida com sucesso!");
    }
};