import React from "react";
import "./App.css";
import { useApp } from "./hooks/useApp";

const App = () => {
  const { error, loading, products } = useApp();

  return (
    <div className="container">
      <h1>Now in Flash Sale</h1>
      {error ? (
        <p>Something went wrong while fetching the data...</p>
      ) : (
        <>
          {loading ? (
            <p>Loading, please wait...</p>
          ) : (
            <>
              {products.map((item) => (
                <div className="card" key={item.id}>
                  <img src={item.image} alt="product-thumbnail" />
                  <div>
                    <p className="product-name">{item.name}</p>
                    <p className="product-price">Rp. {item.price}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
