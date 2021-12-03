//On initialise une classe "cart" (panier) qui contient notre tableau de liste produits

class Cart {
    listProducts = [];

    constructor() {
        if (localStorage.cart) {
            this.listProducts = JSON.parse(localStorage.cart);
        }
    }

    //On ajoute un produit
    addProduct(product, quantity = 1) {
        let exist = false;

        //Pour les produits dans le panier de la liste des produits :
        for (const productCart of this.listProducts) {
            //Si le produit existe déjà, on doit éviter les doublons
            if (product.id == productCart.id && product.color == productCart.color) {
                productCart.quantity += quantity;
                exist = true;
            }
        }

        //Si le produit n'existe pas on l'ajoute au panier 
        if (!exist) {
            product.quantity = quantity;
            this.listProducts.push(product);
        }
        //Ensuite on sauvegarde le panier
        this.saveCart();
    }

    //On diminue la quantité d'un produit
    removeProduct(product) {

        //Pour les produits dans le panier de la liste des produits :
        for (const productCart of this.listProducts) {
            //Si le produit existe déjà, on doit éviter les doublons
            if (product.id == productCart.id && product.color == productCart.color) {
                //Si le produit du panier à une quantité suppérieure à 1 on décrémente
                if (productCart.quantity > 1) {
                    productCart.quantity--;
                    //Dans ce cas, on utilise la fonction "supprimer un produit du panier"
                } else {
                    this.deleteProductOfCart(productCart);
                }
            }
        }

        //On sauvegarde notre panier
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

        // On sauvegarde notre panier
        this.saveCart();
    }

    //Fonction sauvegarder panier dans le local storage
    saveCart() {
        localStorage.cart = JSON.stringify(this.listProducts);
    }

    //Fonction obtenir l'id des produits
    getIdProducts() {
        const idProducts = [];
        //Pour les articles de la liste des produits
        for (const article of this.listProducts) {
            idProducts.push(article.id);
            //Dans le tableau des id des produits ajouter l'id de l'article que l'on à choisi
        }
        return idProducts;
        //La fonction retourne donc l'id des produits
    }
}