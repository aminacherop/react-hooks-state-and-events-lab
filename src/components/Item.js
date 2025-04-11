import React,{useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsCart] = useState(false)

  function handleClick(){
    setIsCart(!isInCart);
  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" :"add"} onClick={handleClick}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
