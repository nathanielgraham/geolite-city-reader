"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const countryRegex = /^[A-Z]{2}$/;
const singleChar = /^[A-Za-z0-9]$/;
const issuerIdNumberRegex = /^(?:[0-9]{6}|[0-9]{8})$/;
const lastDigitsRegex = /^(?:[0-9]{2}|[0-9]{4})$/;
const tokenRegex = /^(?![0-9]{1,19}$)[\u0021-\u007E]{1,255}$/;
class CreditCard {
    constructor(creditCard) {
        if (creditCard.avsResult != null &&
            !singleChar.test(creditCard.avsResult)) {
            throw new errors_1.ArgumentError(`avsResult should be a single character but we received: ${creditCard.avsResult}`);
        }
        if (creditCard.country != null && !countryRegex.test(creditCard.country)) {
            throw new errors_1.ArgumentError('Expected two-letter country code in the ISO 3166-1 alpha-2 format');
        }
        if (creditCard.cvvResult != null &&
            !singleChar.test(creditCard.cvvResult)) {
            throw new errors_1.ArgumentError(`cvvResult should be a single character but we received: ${creditCard.cvvResult}`);
        }
        if (creditCard.issuerIdNumber != null &&
            !issuerIdNumberRegex.test(creditCard.issuerIdNumber)) {
            throw new errors_1.ArgumentError(`The issuer ID number (issuerIdNumber) ${creditCard.issuerIdNumber} is of the wrong format.`);
        }
        if (creditCard.last4digits != null) {
            creditCard.lastDigits = creditCard.last4digits;
        }
        if (creditCard.lastDigits != null &&
            !lastDigitsRegex.test(creditCard.lastDigits)) {
            throw new errors_1.ArgumentError(`The last credit card digits (lastDigits) ${creditCard.lastDigits} are of the wrong format.`);
        }
        if (creditCard.token != null && !tokenRegex.test(creditCard.token)) {
            throw new errors_1.ArgumentError(`The credit card token (token) ${creditCard.token} was invalid. Tokens must be non-space ASCII printable characters. If the token consists of all digits, it must be more than 19 digits.`);
        }
        Object.assign(this, creditCard);
    }
    get last4digits() {
        return this.lastDigits;
    }
    set last4digits(lastDigits) {
        this.lastDigits = lastDigits;
    }
}
exports.default = CreditCard;
