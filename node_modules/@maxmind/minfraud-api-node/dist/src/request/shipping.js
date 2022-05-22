"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const location_1 = __importDefault(require("./location"));
class Shipping extends location_1.default {
    constructor(shipping) {
        super(shipping);
        this.deliverySpeed = shipping.deliverySpeed;
    }
}
exports.default = Shipping;
