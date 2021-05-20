import { ContaBancaria } from "./contaBancaria"

export class ContaInvestimento extends ContaBancaria{

    public calcularSaldo(): number {  
        return this._saldo + (this._saldo * 0.5);    
    }

}