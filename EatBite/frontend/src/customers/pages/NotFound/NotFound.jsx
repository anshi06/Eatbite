import React from "react";

const NotFound = ({ text = "401 Not Found" }) => {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <h1 className="text-3xl font-semibold text-amber-600">{text}</h1>
    </div>
  );
};

export default NotFound;
