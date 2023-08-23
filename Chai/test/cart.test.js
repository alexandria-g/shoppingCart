const { Product, ShoppingCart } = require('../src/eCommerce');
const expect = require('chai').expect;

describe('Testing eCommerce functions', function() {
        //setting instances of products
        let apple = new Product("apple", 4.95);
        let orange = new Product("orange", 3.99);

        //Test case 1
    it('1. Adding 2 apples, 1 orange and checking total price of cart', function(done) {
        //creating new instance of the shopping cart    
        let cart = new ShoppingCart()

        //adding products to the cart
        cart.add(apple)
        cart.add(apple)
        cart.add(orange)

        //asserting the total price of products in the cart is as expected
        expect(cart.getTotalPrice()).to.equal(13.89);
        done();
    });

    //Test case 2
    it('2. Adding 3 apples, removing 1 apple and checking total price of cart', function(done) {
        //creating new instance of the shopping cart
        let cart2 = new ShoppingCart()

        //adding products to the cart
        cart2.add(apple)
        cart2.add(apple)
        cart2.add(apple)

        //removing one apple product from the cart
        cart2.remove("apple")

        //asserting the total price of products in the cart is as expected
        expect(cart2.getTotalPrice()).to.equal(9.9);
        done();
    });

});