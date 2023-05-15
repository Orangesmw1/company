import React from "react";
import Header from "./Header/Header";

const Company = ({ children }) => {
  return (
    <div className="font-serif">
      <Header />
      {children}
    </div>
  );
};

export default Company;
