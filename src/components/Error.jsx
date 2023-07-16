import React from "react";

const Error = ({ mensaje }) => {
  return (
    <div>
      <p className="red center error">{mensaje}</p>
    </div>
  );
};

export default Error;
