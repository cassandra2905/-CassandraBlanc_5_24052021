class Cart {
    listProducts = [];

    constructor() {
        if (localStorage.panier) {
            this.listProducts = JSON.parse(localStorage.panier);
        }
    }

    addProduct(product, quantity) {
        let exist = false;

        for (const productCart of this.listProducts) {
            if (product.id == productCart.id && product.color == productCart.color) {
                productCart.quantity = productCart.quantity + quantity;
                exist = true;
            }
        }

        if (!exist) {
            product.quantity = quantity;
            this.listProducts.push(product);
        }
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
    }

    deleteProductOfCart(product) {
        // On retourne tous les produits dans le panier sauf celui qu'on veut supprimer
        // (celui qui a le même id et la même couleur n'est pas retourné et disparaît donc du panier)
        this.listProducts.filter(productCart => {
            if (product.id != productCart.id || product.color != productCart.color) {
                return productCart;
            }
        });
    }
}