import React, { useState } from "react";

export const Product = (props) => {
  const { productName, productImage, njesia } = props.data;
  const { addToCart } = props;
  const [amount, setAmount] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ ...props.data, amount });
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  }; 

  return (
  

    
    <div className="product p-4 border rounded-lg shadow-lg flex flex-col items-center">


      <img src={productImage} alt={productName} className="w-32 h-32 object-cover mb-4 max-lg:h-20 max-lg:w-20" />
      <div className="description flex-grow text-center w-full"> {/* Added flex-grow */}
        <p className="font-bold text-lg max-lg:text-sm">{productName}</p>
      </div>
      <div className="pt-1">
      <p className="text-gray-600 mt-2 max-lg:text-sm">{njesia}</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
          className="mt-2 p-2 border rounded-md w-24 text-center max-lg:w-14 max-lg:h-8"
        />
      </div>
      <button
        className={`addToCartBttn max-lg:text-sm mt-4 p-2 text-white rounded-md hover:bg-blue-700 ${isAdded ? "bg-green-500 hover:bg-green-600" : "bg-blue-500"}`}
        onClick={handleAddToCart}
      >
        {isAdded ? "Added" : "Add To Cart"}
      </button>
      
    </div>

    
  );
};
