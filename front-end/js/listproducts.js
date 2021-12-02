class ListProducts {
    list = [];

    constructor() { }

    //Requete réseau exécutéé à l'aide d'une promesse (resolve) ou rejetée (dans le cas echéant)
    // Chargement de tout les produits dans le tableau

    loadingProducts() {
        return new Promise((resolve, reject) => {
            fetch("/api/teddies/")
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                })
                .then(data => {
                    for (const product of data) {
                        for (const color of product.colors) {
                            this.list.push(new Product(
                                product._id,
                                color,
                                product.name,
                                product.description,
                                product.price,
                                product.imageUrl
                            ));
                        }
                    }
                    resolve();
                })
                .catch(function (err) {
                    console.error("Erreur", error);
                    reject();
                });
        })
    }

    //Requete réseau exécutéé à l'aide d'une promesse (resolve) ou rejetée (dans le cas echéant)
    //Pour un seul produit (id)

    loadingProduct(id) {
        return new Promise((resolve, reject) => {
            fetch("/api/teddies/" + id)
                .then(function (res) {
                    if (res.ok) {
                        return res.json();
                    }
                })
                .then(function (data) {
                    console.log(data);
                    resolve(data);
                })
                .catch(function (err) {
                    console.error("Erreur", error);
                    reject();
                });
        });
    }

    //On génère la liste des produits sans leur couleurs au choix pour ne pas avoir de produits doublons

    getProductsWithColorsNotUnique() {
        const newList = [];
        const idList = [];

        for (const product of this.list) {
            if (!idList.includes(product.id)) {
                idList.push(product.id);
                newList.push(product);
            }
        }

        return newList;
    }
}