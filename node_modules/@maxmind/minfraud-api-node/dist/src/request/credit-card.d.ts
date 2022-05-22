export interface CreditCardProps {
    issuerIdNumber?: string;
    last4digits?: string;
    lastDigits?: string;
    token?: string;
    bankName?: string;
    bankPhoneCountryCode?: string;
    bankPhoneNumber?: string;
    country?: string;
    avsResult?: string;
    cvvResult?: string;
    was3DSecureSuccessful?: boolean;
}
export default class CreditCard implements CreditCardProps {
    issuerIdNumber?: string;
    lastDigits?: string;
    token?: string;
    bankName?: string;
    bankPhoneCountryCode?: string;
    bankPhoneNumber?: string;
    country?: string;
    avsResult?: string;
    cvvResult?: string;
    was3DSecureSuccessful?: boolean;
    constructor(creditCard: CreditCardProps);
    get last4digits(): string | undefined;
    set last4digits(lastDigits: string | undefined);
}
