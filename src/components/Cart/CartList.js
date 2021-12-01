import { inject, observer } from "mobx-react";
import Cart from "./Cart";

function CartList({ market }) {
  console.log("CartList.js");
  return (
    <div>
      {market.marketBasket &&
        market.marketBasket.map((item) => {
          return (
            <Cart
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              count={item.count}
              func={market.delProduct}
            />
          );
        })}
    </div>
  );
}

// export default CartList;
export default inject("market")(observer(CartList));
