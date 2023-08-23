//initialises name and price properties for the product
class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }
}

//contains methods for adding and removing to the shopping cart and checking the total cost of the products in the cart
class ShoppingCart{
    constructor(){
        this.products = []
    }

    //adds a product to the shopping cart 
    addProductByName(product){
        this.products.push(product)
    }

    //removes the first occurrence of a product with the given name from the shopping cart
    removeFirstFoundProductByName(productName){

        //finds and stores the index of the first product with the matching name, will equal to -1 if there are no products with the matching name
        const productIndex = this.products.findIndex(product => product.name === productName);

        //removes the product based off it's index, in the case that the item was found in the shopping cart
        if (productIndex !== -1){
            this.products.splice(productIndex, 1);
        }
    }

    //calculates and returns the total price of the products in the shopping cart
    getTotalPriceOfShoppingCart(){
        let totalPrice = 0
        this.products.forEach(product => {
            totalPrice += product.price
        });
        return totalPrice
    }
}

//exporting the Product and ShoppingCart classes as objects
module.exports = { Product, ShoppingCart };