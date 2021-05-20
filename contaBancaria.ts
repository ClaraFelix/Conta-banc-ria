export abstract class ContaBancaria {

    protected _saldo: number;

    public depositar(valor: number): void {
        this._saldo = valor + this._saldo;
    }
    public sacar(valor: number): void {
        this._saldo = valor - this._saldo;

    }
    public transferir(valor: number, conta: ContaBancaria): void{
        this.sacar(valor);
        conta.depositar(valor);
    }
    public calcularSaldo(): void {

    }
}