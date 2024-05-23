export class Pessoa {
    
    private _nome!: string;
    protected _idade!: number;

    constructor(nome: string, idade: number) {
        this._nome = nome;
        this._idade = idade;
    }

    protected mostrarNome(): string {
        return `Nome: ${this._nome}`;
    }

    protected mostrarIdade(): string {
        return `Idade: ${this._idade}`;
    }

    // Método público que acessa um método privado
    public apresentar(): string {
        return `${this.mostrarNome()}, ${this.mostrarIdade()}}`;
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
        return `Nome: ${this.mostrarNome()} Cargo: ${this._cargo}, Idade: ${this.mostrarIdade()}, Salario: ${this._salario}`;
        //return `Cargo: ${this._cargo}, Idade: ${this.mostrarIdade()}, Salario: ${this._salario}`;
    }

    // Método público que tenta acessar um atributo privado da classe base (não permitido)
    public tentarMostrarNome(): string {
        // return this.nome; // Erro: 'nome' é privado e só é acessível dentro da classe 'Pessoa'
        return 'Não é possível acessar o nome diretamente';
    }

}



// Definindo a classes abstratas
abstract class Animal {
    // Atributos comuns a todos os animais
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método abstrato (deve ser implementado pelas subclasses)
    abstract fazerSom(): void;
    

    // Método comum a todas as subclasses
    mover(): void {
        console.log(`${this.nome} está se movendo.`);
    }
    mostrarNome() : string {
        return this.nome;
    }

}

// Definindo uma subclasse que estende a classe abstrata Animal
export class Cachorro extends Animal {
    // Implementando o método abstrato
    fazerSom(): void {
        console.log(`${this.nome} diz: Au Au!`);
    }
}

// Definindo outra subclasse que estende a classe abstrata Animal
export class Gato extends Animal {
    // Implementando o método abstrato
    fazerSom(): void {
        console.log(`${this.nome} diz: Miau!`);
    }
}