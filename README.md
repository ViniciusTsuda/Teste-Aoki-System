<img width="547" height="200" alt="image" src="https://github.com/user-attachments/assets/74f1139d-3406-49ba-9018-843ddaa65c2b" />

**AOKI SYSTEM TESTE**

Este repositório contém três exercícios relacionados ao cálculo de comissões de vendedores e uma pequena API em Node.js para registrar vendas.

**Estrutura do projeto**n+- `exercicio_1.js`: Função `CalculaComissao(V, Q)` que calcula a comissão com base no valor total `V` e na quantidade `Q`.
- `exercicio_2.js`: Script que usa `exercicio_1` para calcular comissões de um conjunto de vendedores e imprime um ranking.
- `exercicio_3/`: Pequena API em Express para registrar vendas e calcular comissões acumuladas.
	- `app.js`: Define a rota `POST /venda` e integra validação, store e cálculo de comissão.
	- `server.js`: Inicializa o servidor (porta padrão `3000`).
	- `comissao.js`: Implementação do cálculo de comissão (mesma lógica do `exercicio_1`).
	- `store.js`: Armazena em memória o estado por `vendedor_id` (total de vendas e quantidade).
	- `validacao.js`: Valida o corpo da requisição para a rota de vendas.
	- `package.json`: Dependências (`express`, `nodemon`).
	- `POSTMAN_TESTES/`: Coleção de testes (se presente, use no Postman).

**Como executar**

1. Executar os exercícios simples (sem dependências):

```bash
node exercicio_2.js
```

`exercicio_2.js` importará `exercicio_1.js` e imprimirá o ranking de comissões no console.

2. Executar a API em `exercicio_3`:

```bash
cd exercicio_3
npm install
node server.js
# ou para desenvolvimento com reload automático
npx nodemon server.js
```

A API ficará disponível em `http://localhost:3000` por padrão.

**API - Endpoints**

- POST /venda
	- Descrição: Registra uma venda para um vendedor e retorna o estado atual (total acumulado, quantidade e comissão atual).
	- Body (JSON):
		- `vendedor_id` (integer, obrigatório) — id do vendedor
		- `valor` (number, obrigatório) — valor da venda (maior que 0)
	- Exemplo de uso (curl):

```bash
curl -X POST http://localhost:3000/venda \
	-H "Content-Type: application/json" \
	-d '{"vendedor_id":1,"valor":1500}'
```

Resposta (exemplo):

```json
{
	"vendedor_id": 1,
	"total_vendas": 1500,
	"quantidade_vendas": 1,
	"comissao_atual": 100
}
```




