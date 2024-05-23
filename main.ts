import { Funcionario, Pessoa } from "./poo";


const pessoa = new Pessoa('Fulano',30);
console.log(pessoa.mostrarNome());        // Erro: 'mostrarNome' é privado e só é acessível dentro da classe 'Pessoa'
console.log(pessoa.apresentar());         // Saída: Nome: Alice, Idade: 30, Gênero: Feminino


const funcionario = new Funcionario('Ciclano',28,'Técnico', 2000);
console.log(funcionario.mostrarInformacoes()); // Saída: Cargo: Engenheiro, Idade: 40
console.log(funcionario.tentarMostrarNome()); // Saída: Não é possível acessar o nome diretamente
console.log(funcionario.apresentar()); // Saída: Não é possível acessar o nome diretamente
