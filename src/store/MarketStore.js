import { action, computed, makeObservable, observable } from "mobx";

class MarketStore {
  // state
  marketBasket = [];
  // 선언부
  constructor() {
    makeObservable(this, {
      marketBasket: observable,
      addProduct: action,
      delProduct: action,
      totalCost: computed,
    });
  }
  // action
  addProduct = ({ id, name, price }) => {
    const add = this.marketBasket.find((basket) => id === basket.id);
    if (!add) {
      this.marketBasket.push({
        id,
        name,
        price,
        count: 1,
      });
    } else {
      add.count++;
    }
  };
  delProduct = ({ id }) => {
    this.marketBasket = this.marketBasket.filter((basket) => basket.id !== id);
  };
  // computed
  get totalCost() {
    return this.marketBasket.reduce(
      (acc, curr) => acc + curr.price * curr.count,
      0
    );
  }
}

export default MarketStore;
