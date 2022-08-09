export class ContactUS {
    id?: string;
    address?: string;
    phone?: string;
    mobile?: string;
    email?: string;
    map?: string;
    name?: string;
    arabicAddress?: string;
    message?: string
}

export class Mail {
    host?: string;
    from?: string;
    pass?: string;
    to?: string;
    subject?: string;
    content?: string;
    toAdressTitle?: string;
    fromAdressTitle?: string;
    smtpPortNumber?: number;
}