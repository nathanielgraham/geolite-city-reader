"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const location_1 = __importDefault(require("./location"));
class Billing extends location_1.default {
    constructor(billing) {
        super(billing);
    }
}
exports.default = Billing;
