/**
 * Estrutura interna:
 * {
 *   [vendedor_id]: {
 *     total_vendas:     number,
 *     quantidade_vendas: number,
 *   }
 * }
 */
const store = new Map();

function getVendedor(vendedor_id) {
  if (!store.has(vendedor_id)) {
    store.set(vendedor_id, { total_vendas: 0, quantidade_vendas: 0 });
  }
  return store.get(vendedor_id);
}


//Registra uma nova venda para o vendedor e retorna o estado atualizado.

function registrarVenda(vendedor_id, valor) {
  const vendedor = getVendedor(vendedor_id);
  vendedor.total_vendas += valor;
  vendedor.quantidade_vendas += 1;
  return { ...vendedor }; // retorna cópia para não expor referência interna
}

// Reseta o estado da store (útil para testes)
function resetStore() {
  store.clear();
}

module.exports = { getVendedor, registrarVenda, resetStore };