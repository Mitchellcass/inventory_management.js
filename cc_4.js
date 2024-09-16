// Electronic store inventory array
class Product {
    constructor(name, price, quantity, lowStockLevel) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.lowStockLevel = lowStockLevel;
    }
}

let inventory = [
    new Product("Printer", 150, 20, 5),
    new Product("Smartphone", 800, 40, 10),
    new Product("Projector", 100, 25, 5),
    new Product("Monitor", 200, 10, 2),
    new Product("Keyboard", 50, 40, 10)
];

console.log (inventory)

//Task 2 display product details function
function display(product) {
    const status = product.quantity <=
product.lowStockLevel ? "Low Stock":"In Stock"
    return `${product.name} is ${status}`
    
}

console.log(display(inventory[0])); //shows that inventory for printer is "In Stock"


//Task 3 update product stock after sales
function updateStock(product, unitsSold) {
    product.quantity -= unitsSold;
    if (product.quantity === 0) {
        console.log(`${product.name} is now out of stock.`)
    } else if (product.quantity < product.lowStockLevel) {
        console.log(`${product.name} is now low stock.`)
    } else {
        console.log(`${product.name} stock updated. Remaining quantity: ${product.quantity}`)
    }
}

updateStock(inventory[0], 2);

//Task 4 function to check low stock products
function checkLowStock() {
    inventory.forEach(product => {
        if (product.quantity < product.lowStockLevel) {
            console.log(`${product.name} low stock level.`)
        }
    })
}
checkLowStock()

//Task 5 calculate total inventory value
function calculateInventoryValue() {
    return inventory.reduce((totalValue, product) => totalValue + (product.price * product.quantity), 0)
}

console.log(`Total Inventory Value: $${calculateInventoryValue()}`)

