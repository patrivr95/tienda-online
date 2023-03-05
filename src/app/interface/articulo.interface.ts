export interface Articulo {
    id: number;
    img: string;
    imgDescription: string;
    name: string;
    description: string;
    price: number;
    stock: boolean;
    tallas: string[];
    gender: number
}

export interface ArticuloSimple {
    id: number;
    img: string;
    name: string;
    price: number;
}
