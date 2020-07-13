import Order from './order.js';

function isMatchedOrder(order, name, price) {
  return order.getName() === name && order.getPrice() === price;
}

function processNewOrder(name, amount, price, arrayToCheck, arrayToAddTo) {
  if (arrayToCheck.length === 0) {
    arrayToAddTo.push(new Order(name, amount, price));
    return;
  }

  let trackedAmount = amount;
  const elementsToRemove = [];

  for (let i = 0; i < arrayToCheck.length; i++) {
    if (isMatchedOrder(arrayToCheck[i], name, price)) {
      if (arrayToCheck[i].getAmount() > trackedAmount) {
        arrayToCheck[i].reduceAmount(trackedAmount);
        trackedAmount = 0;
        break;
      } else {
        trackedAmount -= arrayToCheck[i].getAmount();
        elementsToRemove.push(i);
      }
    }
  }

  elementsToRemove.forEach((element) => {
    arrayToCheck.splice(element, 1);
  });

  if (trackedAmount !== 0) {
    arrayToAddTo.push(new Order(name, trackedAmount, price));
  }
}

export class TradingPlatform {
  constructor() {
    this.buyOrders = [];
    this.sellOrders = [];
  }

  getBuyOrders() {
    return this.buyOrders;
  }

  getSellOrders() {
    return this.sellOrders;
  }

  addBuyOrder(name, amount, price) {
    processNewOrder(name, amount, price, this.sellOrders, this.buyOrders);
  }

  addSellOrder(name, amount, price) {
    processNewOrder(name, amount, price, this.buyOrders, this.sellOrders);
  }
}
