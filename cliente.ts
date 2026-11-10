export class Cliente {
    private id: number;
    private nome: string;
    private cpf: string;
    private rg: string;
    private dtNascimento: Date;
    constructor(id: number, nome: string, cpf: string, rg: string, dtNascimento: string) {
this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        const partes = dtNascimento.split('/');
        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10) - 1;
        const ano = parseInt(partes[2], 10);
        this.dtNascimento = new Date(ano, mes, dia);

    }

    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getCPF(): string {
        return this.cpf;

    }

    public getRG(): string {
        return this.rg;

    }

    public getDtNascimento(): string {
        const dia = String(this.dtNascimento.getDate()).padStart(2, '0');
        const mes = String(this.dtNascimento.getMonth() + 1).padStart(2, '0');
        const ano = this.dtNascimento.getFullYear();
        return `${dia}/${mes}/${ano}`;

    }

    public getIdade(): number {
        const anoAtual = new Date().getFullYear();
        const anoNascimento = this.dtNascimento.getFullYear();
        return anoAtual - anoNascimento;

    }

}
 