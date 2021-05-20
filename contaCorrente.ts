import { ContaBancaria } from "./contaBancaria"

export class ContaCorrente extends ContaBancaria {
    
    public calcularSaldo(): number {  
        return this._saldo - (this._saldo * 0.1);    
    }

}