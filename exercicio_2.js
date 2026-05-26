const { CalculaComissao } = require("./exercicio_1");

const vendedores = [
  { nome: "Ana", valor: 18000, quantidade: 12 },
  { nome: "Bruno", valor: 4500, quantidade: 8 },
  { nome: "Carla", valor: 22000, quantidade: 20 },
  { nome: "Diego", valor: 9800, quantidade: 6 },
  { nome: "Elena", valor: 11000, quantidade: 9 },
];

function formatBRL(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

const ranking = vendedores
  .map((v) => ({ ...v, comissao: CalculaComissao(v.valor, v.quantidade) }))
  .sort((a, b) => b.comissao - a.comissao);

console.log("Ranking de comissões:");
ranking.forEach((v, i) => {
  console.log(
    `${i + 1}. ${v.nome} - Vendas: ${formatBRL(v.valor)} | Comissão: ${formatBRL(v.comissao)}`
  );
});

// Conforme enunciado : 
// Detalhamento das comissões Carla: 10% × 22.000 = 2.200 + 1.000 bônus + 20×100 adicional (média 1.100 > 1.500? Não) = R$ 3.200. Ana: 7% × 18.000 = 1.260 + 500 bônus; média 1.500 não é > 1.000... ops, 1.500 > 1.000 sim → +10% de 1.760 = 176 → R$ 1.936. Elena: 7% × 11.000 = 770 + 500; média 1.222 > 1.000 → +10% de 1.270 = 127 → R$ 1.397. Diego: 5% × 9.800 = 490; média 1.633 > 800 → +1% = 98 → R$ 588. Bruno: V < 5.000 → R$ 100 fixo.

