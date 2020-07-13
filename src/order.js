class Order {
  constructor(name, amount, price) {
    this.name = name;
    this.amount = amount;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getAmount() {
    return this.amount;
  }

  getPrice() {
    return this.price;
  }

  reduceAmount(amountToReduce) {
    this.amount -= amountToReduce;
  }
}

export default Order;
