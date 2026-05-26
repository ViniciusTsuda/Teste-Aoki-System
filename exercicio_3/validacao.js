/**
 * @param {object} body - Corpo da requisição
 * @returns {{ valido: boolean, erro?: string }}
 */

function validarVenda(body) {
  const { vendedor_id, valor } = body;

  // Campos obrigatórios presentes?
  if (vendedor_id === undefined || vendedor_id === null) {
    return { valido: false, erro: "O campo vendedor_id é obrigatório" };
  }
  if (valor === undefined || valor === null) {
    return { valido: false, erro: "O campo valor é obrigatório" };
  }

  // Tipos corretos?
  if (!Number.isInteger(vendedor_id) || vendedor_id <= 0) {
    return { valido: false, erro: "O campo vendedor_id deve ser um número inteiro positivo" };
  }
  if (typeof valor !== "number" || isNaN(valor)) {
    return { valido: false, erro: "O campo valor deve ser um número válido" };
  }

  // Valor positivo?
  if (valor <= 0) {
    return { valido: false, erro: "O campo valor deve ser maior que zero" };
  }

  return { valido: true };
}

module.exports = { validarVenda };