export enum Category {
    CommercialForRent = 1,
    CommercialForSale = 2,
    ResidentialForRent = 3,
    ResidentialForSale = 4
}
export const CategoryMapping = {
    [Category.CommercialForRent]: 'Commercial For Rent',
    [Category.CommercialForSale]: 'Commercial For Sale',
    [Category.ResidentialForRent]: 'Residential For Rent',
    [Category.ResidentialForSale]: 'Residential For Sale',
};

export enum Furnishe {
    Yes = 1,
    No = 0,
    Partly = 2
}
export const FurnisheMapping = {
    [Furnishe.Yes]: 'Yes',
    [Furnishe.No]: 'No',
    [Furnishe.Partly]: 'Partly'
};

export enum CategoryType {
    Rent = 1,
    Sale = 2,
}
export const CategoryTypeMapping = {
    [CategoryType.Rent]: 'Rent',
    [CategoryType.Sale]: 'Sale',
}
