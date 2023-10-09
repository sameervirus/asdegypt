import React from "react";

function ButtonPrimary({ text, click }) {
  return (
    <button
      className="group relative h-12 w-48 overflow-hidden bg-white text-lg shadow"
      onClick={click}
    >
      <div className="absolute inset-0 w-3 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span className="relative text-black group-hover:text-white">{text}</span>
    </button>
  );
}

export default ButtonPrimary;
