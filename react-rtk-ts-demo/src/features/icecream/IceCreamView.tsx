import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { ordered, reStocked } from "./iceCreamSlice";
import { useAppDispatch, useAppSelector } from "./../../app/hooks"


const IceCreamView = () => {
  const [value, setValue] = useState<number>(1);
  const numOfIceCream = useAppSelector((state) => state.iceCream.numOfIceCream);

  const dispatch = useAppDispatch();
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
        Restock {isNaN(value) ? 0 : value} IceCreams
      </button>
    </div>
  );
};

export default IceCreamView;
