export class Cheese {
    constructor(
        public Id: number,
        public Name: string,
        public ImageUrl: string,
        public Color: string,
        public PricePerKilo: number
    ) {
    }
}

export const getTestCheese = () => new Cheese(1, 'name', 'imageUrl', 'color', 10);
