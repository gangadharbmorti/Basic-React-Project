import React from "react";

const Searchapi = (props) => {
  const img = `https://source.unsplash.com/user/erondu/600x400/?${props.name} `;
  return (
    <div>
      <img src={img} alt=" random images " />
    </div>
  );
};

export default Searchapi;
