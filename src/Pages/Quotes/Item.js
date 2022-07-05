import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Item = ({ item }) => {
  return (
    <div className="quote_item" id={item.quote_id}>
      <Link to={`/quotes/${item.quote_id}`}>
        <q>{item.quote}</q>
      </Link>
      {"-->"}
      <strong>{item.author}</strong>
    </div>
  );
};

export default Item;
