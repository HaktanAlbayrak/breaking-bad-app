import React from "react";
import { useSelector } from "react-redux";

const Quotes = () => {
  const data = useSelector((state) => state.quotes.items);
  console.log(data);
  return <h1>UGANDA</h1>;
};

export default Quotes;
