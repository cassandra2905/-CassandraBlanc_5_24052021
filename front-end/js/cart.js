//On initialise une classe "cart" (panier) qui contient notre tableau de liste produits

class Cart {
    listProducts = [];

    constructor() {
        if (localStorage.cart) {
            this.listProducts = JSON.parse(localStorage.cart);
        }
    }

    addProduct(product, quantity = 1) {
        let exist = false;

        for (const productCart of this.listProducts) {
            if (product.id == productCart.id && product.color == productCart.color) {
                productCart.quantity = +productCart.quantity + quantity;
                exist = true;
            }
        }

        if (!exist) {
            product.quantity = quantity;
            this.listProducts.push(product);
        }
        this.saveCart();
    }

    removeProduct(product) {
        for (const productCart of this.listProducts) {
            if (product.id == productCart.id && product.color == productCart.color) {
                if (productCart.quantity > 1) {
                    productCart.quantity--;
                } else {
                    this.deleteProductOfCart(productCart);
                }
            }
        }
        this.saveCart();
    }

    deleteProductOfCart(product) {
        // On retourne tous les produits dans le panier sauf celui qu'on veut supprimer
        // (celui qui a le même id et la même couleur n'est pas retourné et disparaît donc du panier)
        this.listProducts = this.listProducts.filter(productCart => {
            if (product.id != productCart.id || product.color != productCart.color) {
                return productCart;
            }
        });

        this.saveCart();
    }

    saveCart() {
        localStorage.cart = JSON.stringify(this.listProducts);
    }

    getIdProducts() {
        const idProducts = [];
        for (const article of this.listProducts) {
            idProducts.push(article.id);
        }
        return idProducts;
    }
}