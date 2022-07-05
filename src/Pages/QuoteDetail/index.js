import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { quotesSelector } from "../../redux/quotesSlice";

const QuoteDetail = () => {
  let navigate = useNavigate();
  const { quote_id } = useParams();

  const quote = useSelector((state) =>
    state.quotes.items.find((item) => item.quote_id === Number(quote_id))
  );

  if (!quote) {
    return navigate(`/quotes`);
  }

  return (
    <div>
      <h1>Quote Detail</h1>
      <pre>{JSON.stringify(quote, null, 2)}</pre>
    </div>
  );
};

export default QuoteDetail;
