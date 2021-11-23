class Product {
    id;
    color;
    name;
    description;
    price;
    image;
    quantity = 0;

    constructor(id, color, name, description, price, image) {
        this.id = id;
        this.color = color;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }

    getFormattedPrice() {
        return (this.price / 100) + " €";
    }
}