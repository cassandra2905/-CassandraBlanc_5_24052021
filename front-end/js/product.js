//On initialise une classe "product" qui comprend tout ce que contient un objet produit 
// (id, couleur, nom, description, prix, image ainsi que sa quantité)

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