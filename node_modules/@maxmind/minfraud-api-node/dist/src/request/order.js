"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isURL_1 = __importDefault(require("validator/lib/isURL"));
const errors_1 = require("../errors");
const currencyRegex = /^[A-Z]{3}$/;
class Order {
    constructor(order) {
        if (order.currency != null && !currencyRegex.test(order.currency)) {
            throw new errors_1.ArgumentError(`The currency code ${order.currency} is invalid`);
        }
        if (order.referrerUri != null && !(0, isURL_1.default)(order.referrerUri.toString())) {
            throw new errors_1.ArgumentError(`The referrer URI ${order.referrerUri.toString()} is invalid`);
        }
        Object.assign(this, order);
    }
}
exports.default = Order;
