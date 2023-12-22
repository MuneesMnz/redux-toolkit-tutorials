import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, reStocked } from "./iceCreamSlice";

const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of IceCreams - {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order IceCreams</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(reStocked(value))}>
        Restock {value === NaN ? 0 : value} IceCreams
      </button>
    </div>
  );
};

export default IceCreamView;
