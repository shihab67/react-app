import React, { useState } from "react";

export default function Image(handleRemove, img) {
  const [isHovering, setIsHovering] = useState(false);
  console.log('hello');
  return img.map((image, index) => (
    <div
      key={index}
      onMouseEnter={() => setIsHovering(index)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative my-4">
        <i
          className={`fa fa-times absolute right-2 cursor-pointer opacity-25 hover:opacity-200 ${
            isHovering === index ? "" : "hidden"
          }`}
          onClick={() => handleRemove(index)}
        ></i>
      </div>
      <img className="px-2" src={image} width="150" alt="" />
    </div>
  ));
}
