import React from "react";

import "./styles.css";

const Item = ({ item }) => {
  return (
    <div className="quote_item" id={item.quote_id}>
      <q>{item.quote}</q> -- <strong>{item.author}</strong>
    </div>
  );
};

export default Item;
