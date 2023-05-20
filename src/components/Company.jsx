import React, { useEffect } from "react";
import Header from "./Header/Header";
import axios from "axios";

const Company = ({ children }) => {
  // useEffect(() => {
  //   const callApi = async () => {
  //     const res = await axios.get("http://localhost:8000/v1/user/");

  //     console.log(res);
  //   };

  //   callApi();
  // }, []);

  return (
    <div className="font-serif">
      <Header />
      {children}
    </div>
  );
};

export default Company;
