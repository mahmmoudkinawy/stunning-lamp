

export class Properties {
    id?: string;
    title?: string;
    bedrooms?: string;
    bathrooms?: 0;
    area?: string;
    areaId?: string;
    location?: string;
    description?: string;
    arabicDescription?: string;
    arabicTitle?: string;
    furnished?: 0;
    parking?: 0;
    // prices?: price[] = [];
    amount: number;
    pricetype: string;
    amount_1: number;
    pricetype_1: string;
    amount_2: number;
    pricetype_2: string;

    images?: string[] = [];
    coverImage?: string;
    imagesList?: string[] = [];
    yearlyServiceCharge?: string;
    chequesN?: number;
    typeId?: PropertyType;
    category?: number;
    amenities?: Amenities[] = []
    type?: PropertyType;
    pricesList?: price[] = []
    reference?: string;
    tag?: string;
    status?: number;
    user?: Profile;
    Limit?: number;
    Skip?: number;
    categoryType?: number;
}


export class price {
    amount: number;
    pricetype: string
}

export class PropertyType {
    id?: string;
    name?: string;
    arabicName?: string;
}

export class Amenities {
    id?: string;
    name?: string;
    arabicName?: string;
    amenities?: string;
    checked?: boolean
}


export class Profile {
    id?: string;
    firstName?: string;
    lastName?: string;
    fullNumber?: string;
    whatsPhone?: string;
    position?: string;
    picture?: string;
    email?: string;
    roleId?: string;
    role?: string;
}