import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
const Paginate = () => {
  const query = useSearchParams();
  const query1 = useLocation();
  console.log(query);
  console.log(query1.search);
};
export default Paginate;
