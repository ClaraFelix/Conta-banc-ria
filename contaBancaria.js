"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria() {
    }
    ContaBancaria.prototype.depositar = function (valor) {
        this._saldo = valor + this._saldo;
    };
    ContaBancaria.prototype.sacar = function (valor) {
        this._saldo = valor - this._saldo;
    };
    ContaBancaria.prototype.transferir = function (valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    };
    ContaBancaria.prototype.calcularSaldo = function () {
    };
    return ContaBancaria;
}());
exports.ContaBancaria = ContaBancaria;
