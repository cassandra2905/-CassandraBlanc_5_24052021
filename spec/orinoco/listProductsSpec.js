describe("ListProducts", function () {

    var ListProducts = require("../../front-end/js/listProducts.js");
    var Product = require("../../front-end/js/Product.js");
    var listProducts;
    var product;
    const length = listProducts.list.length;



    beforeEach(function () {

        listProducts = new ListProducts();
        listProducts.list = [
            new Product("idtest1", "color", "norbert", "description", 3400, "imageUrl"),
            new Product("idtest2", "color", "arnold", "description", 3700, "imageUrl"),
            new Product("idtest3", "color", "gustav", "description", 3900, "imageUrl"),
            new Product("idtest4", "color", "garfunkel", "description", 3200, "imageUrl"),
        ];
    });

    it("should be able to get products with colors not unique", function () {
        expect(listProducts.getProductsWithColorsNotUnique(listProducts)).toEqual(length);
    });
});
