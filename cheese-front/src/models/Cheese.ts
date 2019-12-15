export class Cheese {
    constructor(
        public id: number,
        public name: string,
        public imageUrl: string,
        public color: string,
        public pricePerKilo: number
    ) {
    }
}

export const getTestCheese = () => new Cheese(
    1,
    'Brie',
    'https://cheese.com/media/img/cheese/Brie_PDCo3RG.jpg',
    'Cream',
    30
);
