import React from "react";
import "./MainContent.css";
import info from "../../data/data.json";
import { Fragment, useState, useEffect } from "react";

const MainContent = () => {
  const [cartArray, setCartArray] = useState([]);

  useEffect(() => {
    console.log(cartArray);
  }, [cartArray]);

  const addToCart = (prod) => {
    setCartArray([...cartArray, prod]);
    console.log("Product added to the cart");
  };

  const removeFromCart = (prod) => {
    setCartArray(cartArray.filter((item) => item.name != prod.name));
    console.log("Product removed from the cart");
  };

  return (
    <main className="main_content">
      {info.data.map((entry, idx) => (
        <Fragment key={entry.name + idx}>
          <h2 className="text-2xl mt-10">{entry.name}</h2>
          <div className="border border-black mb-6" />

          <div className="grid gap-10 grid-cols-4">
            {entry.productList.map((product, idx) => (
              <Fragment key={product.name + idx}>
                {/* This is the card component */}
                <div className="card text-xl bg-[#a388ec]">
                  <div className="mb-10 flex flex-col w-[80%] m-auto">
                    <span>Name: {product.name}</span>
                    <span>Price: {product.price}</span>
                  </div>
                  <span onClick={() => addToCart(product)} className="buttons">
                    Add to cart
                  </span>
                  <span
                    onClick={() => removeFromCart(product)}
                    className="buttons"
                  >
                    Remove from cart
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </Fragment>
      ))}
    </main>
  );
};

export default MainContent;
