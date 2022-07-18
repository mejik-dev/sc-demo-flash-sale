import React from "react";
import "./App.css";
import { useFlashSale } from "./hooks/useFlashSale";

function App() {
  const { loading, error, products } = useFlashSale();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="container">
      <h1>Product Flash Sale</h1>
      {products?.map(({ id, name, image, price }) => (
        <div className="card" key={id}>
          <img src={image} alt="ImageProducts" />
          <div>
            <p className="product-name">{name}</p>
            <p className="product-price">Rp. {price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
