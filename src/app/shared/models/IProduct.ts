export interface IProductRate {
    count?: number;
    rate?: number;
}

export interface IProduct {
    id?: number;
    rating?: IProductRate;
    price?: number;
    description?: string;
    category?: string;
}
