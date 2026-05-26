//igual o exercicio 1

function calculaComissao(V, Q) {
  const media = Q === 0 ? 0 : V / Q;
 
  if (V < 5000) {
    return 100;
  }
 
  if (V <= 10000) {
    let comissao = V * 0.05;
    if (media > 800) comissao += V * 0.01;
    return comissao;
  }
 
  if (V <= 20000) {
    let comissao = V * 0.07 + 500;
    if (media > 1000) comissao += comissao * 0.10;
    return comissao;
  }
 
  let comissao = V * 0.10 + 1000;
  if (media > 1500) comissao += 100 * Q;
  return comissao;
}
 
module.exports = { calculaComissao };
 