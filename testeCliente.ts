import { Cliente } from './models/Cliente.js';
const cliente1 = new Cliente(1, "André Solicito", "068.753.540-98", "41.068.896-4", "23/05/1980");
const cliente2 = new Cliente(2, "Janete de Oliveira", "501.764.310-98", "20.360.374-6", "12/01/1970");
const cliente3 = new Cliente(3, "José de Almeida", "862.373.890-08", "42.172.423-7", "13/07/1965");
const clientes: Cliente[] = [cliente1, cliente2, cliente3];
console.log("================ TESTE DA CLASSE CLIENTE ================\n");
clientes.forEach((cliente) => {
   console.log(`ID: ${cliente.getId()}`);
   console.log(`Nome: ${cliente.getNome()}`);
   console.log(`CPF: ${cliente.getCPF()}`);
   console.log(`RG: ${cliente.getRG()}`);
   console.log(`Data de Nascimento: ${cliente.getDtNascimento()}`);
   console.log(`Idade: ${cliente.getIdade()} anos`);9999999,                0
   console.log("---------------------------------------------------------");
});