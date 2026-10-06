export interface ProductType {
    id: number;
    name: string;
    description?: string;
    price: number;
    category: string;
    subcategory: string;
    isActive: boolean;
    isFeatured: boolean;
    image?: string;
    rating?: number;
    stock?: number;
    [key: string]: any;
}
