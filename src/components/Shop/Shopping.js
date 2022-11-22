import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './Shopping.css'

const Shopping = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('Products.json')
        .then(res => res.json())
        .then(data=>setProducts(data))
    },[])

    const handleClickToCart =(product)=>{
      console.log(product);
      const newCart = [...cart,product]
      setCart(newCart)
    }
 
  return (
    <div className="shop">
      <div className="products-container">
        {
          products.map(product=><Product 
            key={product.id}
            product={product}
            handleClickToCart={handleClickToCart}
          ></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shopping;
