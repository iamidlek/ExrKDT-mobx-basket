# mobx 사용 해보기

- mobx, mobx-react
- mobx의 inject 및 React.memo로 최적화를 고려
  > console.log('컴포넌트명')으로 확인

### makeObservable

> 상태, 함수 등 역할을 명시적으로 지정
> 최적화를 위해 명시해 주는 것이 권고됨

```js
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
```

### 생성

- App.js

```js
import { Provider } from "mobx-react";
import MarketStore from "./store/MarketStore";

// 스토어 생성
const marketStore = new MarketStore();

function App() {
  return (
    <Provider market={marketStore}>
      <Mart />
    </Provider>
  );
}
```

- 컴포넌트에 주입도 가능

```js
<Mart market={marketStore} />
```

### 사용

> 부모 컴포넌트로부터 props로 받거나 inject 사용

```js
import { inject, observer } from "mobx-react";

const Mart = ({ market }) => {
  return <CardFooter>Total : {market.totalCost}</CardFooter>;
};

// <Provider market={marketStore}> 주입한 이름으로 사용
export default inject("market")(observer(Mart));
```

> 특정 함수 또는 상태만 불러오기

```js
function Product({ addProduct }) {
  return (
    <Button
      onClick={() =>
        addProduct({
          id,
          name,
          price,
        })
      }
    >
      담기
    </Button>
  );
}

export default inject(({ market }) => ({
  addProduct: market.addProduct,
}))(observer(Product));
```
