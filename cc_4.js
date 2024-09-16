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

