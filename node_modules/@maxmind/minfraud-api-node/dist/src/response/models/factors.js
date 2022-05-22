"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const insights_1 = __importDefault(require("./insights"));
class Factors extends insights_1.default {
    constructor(response) {
        super(response);
        this.subscores = (0, utils_1.camelizeResponse)(response.subscores);
    }
}
exports.default = Factors;
