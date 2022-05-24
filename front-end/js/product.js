//On initialise une classe "product" qui comprend tout ce que contient un objet produit 
class Product {
    id;
    color;
    name;
    description;
    price;
    image;
    quantity = 0;

    //(id, couleur, nom, description, prix, image ainsi que sa quantité)
    //Le constructor sert à savoir ce qui est relatif à notre objet product
    constructor(id, color, name, description, price, image) {
        this.id = id;
        this.color = color;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }

    //On crée une fonction getFormattedPrice afin d'obtenir notre prix formaté correctement
    getFormattedPrice() {
        return (this.price / 100) + " €";
    }

    // Renvoie vrai si la donnée est un Product, sinon faux
    static check(data) {
        // Vérifier si c'est un produit, et renvoyer vrai ou faux
        if (data instanceof Object) {
            const keys = Object.keys(data);
            if ((keys.includes("id") || keys.includes("_id")) &&
                (keys.includes("color") || keys.includes("colors")) &&
                keys.includes("name") &&
                keys.includes("description") &&
                keys.includes("price") &&
                (keys.includes("image") || keys.includes("imageUrl"))
            ) {
                if (typeof data.price === 'number') {
                    return true;
                }
            }
        }
        return false;
    }
}
