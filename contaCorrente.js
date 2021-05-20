"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
var contaBancaria_1 = require("./contaBancaria");
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaCorrente.prototype.calcularSaldo = function () {
        return this._saldo - (this._saldo * 0.1);
    };
    return ContaCorrente;
}(contaBancaria_1.ContaBancaria));
exports.ContaCorrente = ContaCorrente;
