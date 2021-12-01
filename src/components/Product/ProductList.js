// import { inject, observer } from "mobx-react";
import React from "react";
import Product from "./Product";

const products = [
  {
    id: "p1",
    name: "새우깡",
    price: 1300,
  },
  {
    id: "p2",
    name: "우유",
    price: 1000,
  },
  {
    id: "p3",
    name: "허니 버터 칩",
    price: 1600,
  },
  {
    id: "p4",
    name: "썬칩",
    price: 1600,
  },
  {
    id: "p5",
    name: "홈런볼",
    price: 1100,
  },
];

// function ProductList(props) {
function ProductList() {
  console.log("ProductList.js");
  return (
    <div>
      {products.map((item) => {
        return (
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            // {...props}
          />
        );
      })}
    </div>
  );
}

export default React.memo(ProductList);
