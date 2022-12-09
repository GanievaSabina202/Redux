import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Basket from "./components/Basket";
import { AddProduct, AllProduct } from "./features/products/ProductsSlice";

function App() {
  const productsItem = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => dispatch(AllProduct(json)));
  }, []);

  return (
    <>
      <div>
        {productsItem?.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "#d4d3d3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <img
              src=""
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
              }}
            />
            <button onClick={() => dispatch(AddProduct(item))}>+</button>
          </div>
        ))}
      </div>

      <div>
        <Basket />
      </div>
    </>
  );
}

export default App;
