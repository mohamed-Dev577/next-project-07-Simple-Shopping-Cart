"use client";

import { useState } from "react";

export default function ShoppingPage() {
  
  const [cart, setCart] = useState([]);

 const products=[{
    id:1,
    name: "Laptop",
    price: 20000
  },
  {
    id:2,
    name: "Phone",
    price: 10000
  },
  {
    id:3,
    name: "Headphones",
    price: 1500

  }
 ] 

 const AddProduct = (product) => {
  setCart([...cart, product]);
  
  
  
 }
 
const RemoveProduct = (product) => {
  const updateCart = cart.filter((item) => item.id !== product.id);
  setCart(updateCart);
}

const ClearCart = () =>{
  setCart([]);
}

  const total = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div>
      <h1>Products</h1>
      <p>Price</p>
      <ul>
        {products.map((product, index) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <button onClick={() => AddProduct(product)}>Add To Cart</button>
          </li>
        ))}
      </ul>

      <ul>
        {cart.map((item, index) => (
          <li key={item.id}>{item.name} - {item.price}
           <button onClick={() => RemoveProduct(item)}>Remove</button>
          
           </li>
        ))}
        
        <li>
          <button onClick={ClearCart}>Clear Cart</button>
          </li>

      </ul>
      <p>Total: {total}</p>
    </div>
  );
}