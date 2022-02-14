import React from "react";

import TypeGradients from "../data/typeGradients";
const Poketype = ({ type }) => {
  return (
    <div
      style={{
        backgroundColor: TypeGradients[type],
        textTransform: "capitalize",
        padding: "5px",
        width: "100px",
        textAlign: "center",
        borderRadius: "5px",
        color: "#fff",
        margin: "0 5px"
      }}
    >
      {type}
    </div>
  );
};

export default Poketype;
