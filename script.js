const epis = [
  { nome: "bota", preco: 54.90, qtd: 50 },
  { nome: "capacete", preco: 32.50, qtd: 70 },
  { nome: "luva de segurança", preco: 12.90, qtd: 100 },
  { nome: "óculos de proteção", preco: 18.75, qtd: 80 },
  { nome: "protetor auricular", preco: 5.60, qtd: 150 },
  { nome: "máscara descartável", preco: 0.90, qtd: 300 },
  { nome: "colete refletivo", preco: 22.30, qtd: 60 },
  { nome: "macacão de segurança", preco: 65.00, qtd: 40 },
  { nome: "respirador PFF2", preco: 7.80, qtd: 120 },
  { nome: "cinto de segurança", preco: 89.90, qtd: 30 },
  { nome: "talabarte", preco: 89.90, qtd: 20 },
  { nome: "luva multitato", preco: 1.30, qtd: 30 }
];


const container = document.getElementById('epis');
  container.innerHTML = epis.map(epi => `
    <div>
    <p>Produto: <strong>${epi.nome}</strong></p>
    <p>Preço: <strong>${(epi.preco.toLocaleString('pt-br', {
      style: 'currency', currency: 'BRL'
      }))}</strong></p>
    <p>Quantidade: <strong>${epi.qtd}</strong></p>
    </div>
    
    `).join('');


const totalInvest = document.getElementById('totalInvest');
const total = epis.reduce((soma, epi) => {
  return soma + (epi.preco * epi.qtd);
}, 0);
const totalFormatado = total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

totalInvest.innerHTML = `<p>Total Investido:</p> <strong>${totalFormatado}</strong>`;

 
