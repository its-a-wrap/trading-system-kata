import chai from 'chai';
import { TradingPlatform } from './tradingPlatform.js';

const { expect } = chai;

describe('GIVEN  TradingPlatform class', () => {
  describe('AND it is initialised', () => {
    it('SHOULD initialise with no buy or sell orders', () => {
      const tradingPlatform = new TradingPlatform();

      const buyOrders = tradingPlatform.getBuyOrders();
      const sellOrders = tradingPlatform.getSellOrders();

      expect(buyOrders).to.be.empty;
      expect(sellOrders).to.be.empty;
    });
  });

  describe('AND a buy order for 100 `TSCO` at 2.50 is added', () => {
    it('SHOULD add the order to buy orders', () => {
      const tradingPlatform = new TradingPlatform();

      tradingPlatform.addBuyOrder('TSCO', 50, 2.50);
      expect(tradingPlatform.getBuyOrders()).to.have.length(1);
    });
  });

  describe('AND multiple buy/sell orders are added', () => {
    it('SHOULD match the existing buy order no orders should be on the platform', () => {
      const tradingPlatform = new TradingPlatform();

      tradingPlatform.addSellOrder('TSCO', 46, 2.50);
      tradingPlatform.addBuyOrder('TSCO', 100, 2.50);
      tradingPlatform.addBuyOrder('TSCO', 56, 2.50);
      tradingPlatform.addSellOrder('TSCO', 56, 2.50);

      const sellOrders = tradingPlatform.getSellOrders();
      const buyOrders = tradingPlatform.getBuyOrders();

      expect(sellOrders).to.eql([]);
      expect(buyOrders).to.eql([{ amount: 54, name: 'TSCO', price: 2.5 }]);
    });
  });

  describe('AND many orders are added for various stocks and prices', () => {
    const tradingPlatform = new TradingPlatform();

    tradingPlatform.addBuyOrder('APPL', 50, 2.17);
    tradingPlatform.addBuyOrder('GGLE', 50, 2.50);
    tradingPlatform.addBuyOrder('YUTB', 45, 2.50);
    tradingPlatform.addBuyOrder('TSCO', 50, 1.50);
    tradingPlatform.addBuyOrder('APPL', 50, 3.50);

    tradingPlatform.addSellOrder('TSCO', 100, 1.50);
    tradingPlatform.addSellOrder('TSCO', 100, 1.50);
    tradingPlatform.addSellOrder('TSCO', 100, 1.50);
    tradingPlatform.addSellOrder('TSCO', 100, 1.50);
  });
});
