let nome = prompt("Digite o seu nome: ");
let salario = parseFloat(prompt("Digite o seu salário: "));

while (isNaN(salario) || salario <= 0) {
  salario = parseFloat(prompt("Inválido, digite o seu salário novamente: "));
}

let quantidade_despesas = parseInt(
  prompt("Digite a quantidade de despesas (1 a 5): "),
);
while (isNaN(quantidade_despesas) || quantidade_despesas <= 0) {
  quantidade_despesas = parseInt(
    prompt("Inválido, digite a quantidade de despesas novamente: "),
  );
}

let totaldespesa = 0;

for (let i = 1; i <= quantidade_despesas; i++) {
  let despesa = parseFloat(prompt("Digite o valor da despesa " + i + ": "));

  while (isNaN(despesa) || despesa <= 0) {
    despesa = parseFloat(
      prompt("Inválido, digite o valor da despesa " + i + ": "),
    );
  }

  totaldespesa += despesa;
}
let sobra = salario - totaldespesa;

if (totaldespesa >= salario) {
  alert("ATENÇÂO, Voce gastou mais do que ganhou");
} else if (sobra >= (30 * salario) / 100) {
  alert("Ótimo, você economizou R$: ", +sobra);
} else {
  alert("Da pra melhorar em vagabundo, economizou R$: " + sobra);
}

console.log(nome);
console.log("Salário:", salario);
console.log("Total de despesas:", totaldespesa);
console.log("Saldo final:", sobra);
