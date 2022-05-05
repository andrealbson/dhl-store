export default function formatCurrency(num) {
    return num.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }
  