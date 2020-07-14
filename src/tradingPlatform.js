import { processNewOrder } from './helpers.js';

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
