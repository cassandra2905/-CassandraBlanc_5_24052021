class ListProducts {
    list = [];

    constructor() { }

    //Requete réseau exécutéé à l'aide d'une promesse (resolve) ou rejetée (dans le cas echéant)
    // Chargement de tous les produits dans le tableau

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

        //Nouveau tableau où l'on mettra les id des produits sans leurs couleurs distinctives
        //C'est donc la liste qu'on veut faire apparaitre sans les dérivés de couleur
        const newList = [];

        //Tableau liste d'id
        const idList = [];

        //Pour les produits de cette liste :
        for (const product of this.list) {
            //Si le tableau de la liste des id n'inclue pas l'id d'un produit 
            if (!idList.includes(product.id)) {
                //On ajoute à la liste des id l'id du produit 
                idList.push(product.id);
                //Et on ajoute le produit à notre nouveau tableau 
                newList.push(product);
            }
        }

        return newList;
        //Notre nouvelle liste de produits sans dérivés de couleur est retournée 
    }
}