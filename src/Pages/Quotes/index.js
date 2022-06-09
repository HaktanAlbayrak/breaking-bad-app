import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchAllQuotes,
  statusSelector,
  errorSelector,
  quotesSelector,
} from "../../redux/quotesSlice";

import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Item from "../Quotes/Item";

const Quotes = () => {
  const dispatch = useDispatch();
  const data = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, status]);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div style={{ padding: 10 }}>
      <h1>Quotes</h1>
      {status === "loading" && <Loading />}

      {status === "succeeded" && data.map((item) => <Item item={item} />)}

      {status === "succeeded" && (
        <div className="quotes_info">{data.length} quotes.</div>
      )}
    </div>
  );
};

export default Quotes;
