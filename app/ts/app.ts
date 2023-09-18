let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);


const pessoa1 = new Pessoa('Caio', 20, new Date('06/22/2002'));
const pessoaFisica = new PessoaFisica('Igor', 18, new Date('06/22/2005'), '11122233344');
const pessoaJuridica = new PessoaJuridica('Fulano', 21, new Date('10/05/2002'), '11223344323');

console.log('Nome Pessoa: ' + pessoa1._nome);
console.log('Idade Pessoa: ' + pessoa1._idade);
console.log('Data de Nascimento: ' + pessoa1._dataNascimento);

console.log('Nome Pessoa Física: ' + pessoaFisica._nome);
console.log('Idade Pessoa Física: ' + pessoaFisica._idade);
console.log('Data de Nascimento Pessoa Física: ' + pessoaFisica._dataNascimento);
console.log('CPF:' + pessoaFisica._cpf);

console.log('Nome Pessoa Jurídica: ' + pessoaJuridica._nome);
console.log('Idade Pessoa Jurídica: ' + pessoaJuridica._idade);
console.log('Data de Nascimento Pessoa Jurídica: ' + pessoaJuridica._dataNascimento);
console.log('CNPJ:' + pessoaJuridica._cnpj);