import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, reStocked } from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cakes</button>
      <button onClick={() => dispatch(reStocked(5))}> Restock 5 Cakes</button>
    </div>
  );
};

export default CakeView;
