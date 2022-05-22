"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = require("net");
const snakecase_keys_1 = __importDefault(require("snakecase-keys"));
const constants_1 = require("../constants");
const errors_1 = require("../errors");
class TransactionReport {
    constructor(transactionReport) {
        if ((0, net_1.isIP)(transactionReport.ipAddress) === 0) {
            throw new errors_1.ArgumentError('`transactionReport.ipAddress` is an invalid IP address');
        }
        if (!transactionReport.tag ||
            !Object.values(constants_1.Tag).includes(transactionReport.tag)) {
            throw new errors_1.ArgumentError(`"${transactionReport.tag}" is an invalid value for "transactionReport.tag"`);
        }
        this.ipAddress = transactionReport.ipAddress;
        this.tag = transactionReport.tag;
        Object.assign(this, transactionReport);
    }
    toString() {
        return JSON.stringify((0, snakecase_keys_1.default)(this));
    }
}
exports.default = TransactionReport;
