import React from "react";

const Button = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <button className="button" onClick={handleClick}>
      확인
    </button>
  );
};

export default Button;