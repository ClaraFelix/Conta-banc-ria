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
exports.ContaInvestimento = void 0;
var contaBancaria_1 = require("./contaBancaria");
var ContaInvestimento = /** @class */ (function (_super) {
    __extends(ContaInvestimento, _super);
    function ContaInvestimento() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaInvestimento.prototype.calcularSaldo = function () {
        return this._saldo + (this._saldo * 0.5);
    };
    return ContaInvestimento;
}(contaBancaria_1.ContaBancaria));
exports.ContaInvestimento = ContaInvestimento;
