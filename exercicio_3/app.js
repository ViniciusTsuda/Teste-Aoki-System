const express = require("express");
const { calculaComissao } = require("./comissao");
const { registrarVenda } = require("./store");
const { validarVenda } = require("./validacao");

const app = express();
app.use(express.json());

app.post("/venda", (req, res) => {
  //Validação de entrada
  const { valido, erro } = validarVenda(req.body);
  if (!valido) {
    return res.status(400).json({ erro });
  }

  const { vendedor_id, valor } = req.body;

  //Acumula venda e incrementa quantidade
  const { total_vendas, quantidade_vendas } = registrarVenda(vendedor_id, valor);

  //Recalcula comissão com base no total acumulado até o momento
  const comissao_atual = calculaComissao(total_vendas, quantidade_vendas);

  //Retorna estado atual
  return res.status(200).json({
    vendedor_id,
    total_vendas,
    quantidade_vendas,
    comissao_atual,
  });
});

module.exports = app;