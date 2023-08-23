const { Product, ShoppingCart } = require('../src/eCommerce');
const expect = require('chai').expect;

describe('Testing eCommerce functions', function() {
        //setting instances of products
        let laptop = new Product("laptop", 399.99);
        let phone = new Product("phone", 895.85);

        //Test case 1
    it('1. Adding 2 laptops, 1 phone and checking total price of cart', function(done) {
        //creating new instance of the shopping cart    
        let cart = new ShoppingCart()

        //adding products to the cart
        cart.add(laptop)
        cart.add(laptop)
        cart.add(phone)

        //asserting the total price of products in the cart is as expected
        expect(cart.getTotalPrice()).to.equal(1695.83);
        done();
    });

    //Test case 2
    it('2. Adding 3 laptops, removing 1 laptop and checking total price of cart', function(done) {
        //creating new instance of the shopping cart
        let cart2 = new ShoppingCart()

        //adding products to the cart
        cart2.add(laptop)
        cart2.add(laptop)
        cart2.add(laptop)

        //removing one laptop product from the cart
        cart2.remove("laptop")

        //asserting the total price of products in the cart is as expected
        expect(cart2.getTotalPrice()).to.equal(799.98);
        done();
    });

});