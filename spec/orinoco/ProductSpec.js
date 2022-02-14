describe("Product", function () {

    var Product = require("../../front-end/js/Product.js");
    var product;

    beforeEach(function () {
        //on veut afficher le prix du produit en nombre entier sans les centimes
        product = new Product("azertyui", "zsdfghjk", "zertyuio", "azertyuk", 2900, "azertyu");
        //On veut afficher le prix du produit en nombre à virgules
        product2 = new Product("azertyui", "zsdfghjk", "zertyuio", "azertyuk", 2934, "azertyu");
        //On veut afficher le prix du produit égal à 0 €
        product3 = new Product("azertyui", "zsdfghjk", "zertyuio", "azertyuk", 0, "azertyu");
        //On veut afficher le prix en négatif 
        product4 = new Product("azertyui", "zsdfghjk", "zertyuio", "azertyuk", -2900, "azertyu");
    });

    it("should be able to get formatted price", function () {
        expect(product.getFormattedPrice()).toEqual("29 €");
    });

    it("should be able to get formatted price", function () {
        expect(product2.getFormattedPrice()).toEqual("29.34 €");
    });

    it("should be able to get formatted price", function () {
        expect(product3.getFormattedPrice()).toEqual("0 €");
    });

    it("should be able to get formatted price", function () {
        expect(product4.getFormattedPrice()).toEqual("-29 €");
    });
})