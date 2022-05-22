"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Account {
    constructor(account) {
        this.userId = account.userId;
        if (account.username) {
            this.usernameMd5 = crypto_1.default
                .createHash('md5')
                .update(account.username)
                .digest('hex');
        }
    }
}
exports.default = Account;
