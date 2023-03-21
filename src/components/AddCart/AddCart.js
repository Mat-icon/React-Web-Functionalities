import React, {useState} from "react";
import "./app.css";
import { Link } from "react-router-dom";

function AddCart() {
    const[quantity, setQuantity] = useState(0);

    function handleClick(prevQuantity){
        const newQuantity = quantity + prevQuantity;
        if (newQuantity < 0){
            return;
        }else{
             setQuantity(newQuantity)
        }
       
    }

  return (
    <Link to="/quantity">
      <div className="quantity-body">
        <div className="quantity-flex" >
          <button className="quantity-btn" onClick={()=>handleClick(+1)}>+</button>
          <h2>{quantity}</h2>
          <button className="quantity-btn" onClick={()=>handleClick(-1)}>-</button>
        </div>
        <h4>You have {quantity} {quantity <= 1 ? 'product' : 'products'} in shopping cart</h4>
      </div>
    </Link>
  );
}

export default AddCart;
