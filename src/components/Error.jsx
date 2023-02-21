import React from "react";

const Error = ({mensaje}) => {
  return (
    <div>
      <div
        className=" uppercase 
                text-xs
                bg-rose-800
                text-white
                font-bold
                p-3 mb-5 rounded
                text-center">
        <p>{mensaje}</p>
      </div>
    </div>
 );
};

export default Error;
