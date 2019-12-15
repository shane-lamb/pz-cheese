export interface Cheese {
    id: number;
    name: string;
    imageUrl: string;
    color: string;
    pricePerKilo: number;
}

export function getTestCheese(): Cheese {
    return {
        id: 1,
        name: 'Brie',
        imageUrl: 'https://cheese.com/media/img/cheese/Brie_PDCo3RG.jpg',
        color: 'Cream',
        pricePerKilo: 30
    };
}
