import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCardData, getColors } from "./ColorSlice";

const ColorCard = () => {
  const dispatch = useDispatch();

  const card = useSelector((state) => state.card.colors);

  console.log(card);

  useEffect(() => {
    dispatch(getColors());
  }, []);

  return (
    <div>
      {card.map((item) => (
        <h1>Salam : {item.id}</h1>
      ))}
    </div>
  );
};

export default ColorCard;
