export class Pessoa {
    
    private _nome!: string;
    protected _idade!: number;

    constructor(nome: string, idade: number) {
        this._nome = nome;
        this._idade = idade;
    }

    private mostrarNome(): string {
        return `Nome: ${this._nome}`;
    }

    protected mostrarIdade(): string {
        return `Idade: ${this._idade}`;
    }

    // Método público que acessa um método privado
    public apresentar(): string {
        return `${this.mostrarNome()}, ${this.mostrarIdade()}}`;
    }

    public falar() {
        return "Olá, tudo bem ?";
    }

}

//A classe funcionário é definida a partir da classe Pessoa
export class Funcionario extends Pessoa {
    private _cargo!: string;
    private _salario!: number;
    
    constructor(nome: string, idade: number, cargo: string, salario: number) {
        super(nome, idade);
        this._cargo = cargo;
        this._salario = salario;
    }

    public mostrarInformacoes(): string {
        // Acessando atributo protegido e método protegido da classe base
        return `Nome: ${super.mostrarNome()} Cargo: ${this._cargo}, Idade: ${this.mostrarIdade()}, Salario: ${this._salario}`;
    }

    // Método público que tenta acessar um atributo privado da classe base (não permitido)
    public tentarMostrarNome(): string {
        // return this.nome; // Erro: 'nome' é privado e só é acessível dentro da classe 'Pessoa'
        return 'Não é possível acessar o nome diretamente';
    }

    public falar() {
        return "Terminei minha tarefa !!";
    }

}