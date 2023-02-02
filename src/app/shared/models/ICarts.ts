export interface IProductId {
    productId?: number;
    quantity?: number;
}
export interface ICarts {
    id?: string;
    date?: Date;
    products?: [IProductId];
    userId?: number;
}
