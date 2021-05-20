import { ContaBancaria } from "./contaBancaria"
import { ContaInvestimento } from "./contaInvestimento"
import { ContaCorrente } from "./contaCorrente"

let contaA: ContaBancaria = new ContaCorrente();
contaA.depositar(100);
contaA.sacar(50);
let saldo = contaA.calcularSaldo();

console.log(saldo);

let contaB: ContaBancaria = new ContaInvestimento();
contaB.depositar(200);
contaB.sacar(100);
let saldo2 = contaB.calcularSaldo();

console.log(saldo2);

let transf = contaB;
contaB.transferir(20, contaA);

console.log(transf);