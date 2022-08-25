import React, { useState } from "react";
import uuid from "react-uuid";
import { useSelector, useDispatch } from "react-redux";
import { addCardList, deleteCardList, changeCardList } from "./CardListSlice";

const CardList = () => {
  const CardListSelector = useSelector((state) => state.Card.cardListArr);

  const [inputVal, setInputVal] = useState("");
  const [inputValChange, setinputValChange] = useState("");

  const dispatch = useDispatch();

  const addCardListFunc = () => {
    dispatch(addCardList({ inputVal, id: uuid() }));
  };

  const changeCardListFunc = ({ inputValChange, id }) => {
    console.log("Change CardList:", inputValChange, "id:", id);
    dispatch(changeCardList({ inputValChange, id }));
  };

  const deleteCardListFunc = (id) => {
    dispatch(deleteCardList({ id }));
  };

  return (
    <>
      <div>
        <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
        <button onClick={addCardListFunc}>Ok</button>
      </div>

      {CardListSelector.map((i) => (
        <div key={i.id}>
          <h5>Text:{i.inputVal}</h5>
          <input
            placeholder="Change Text"
            value={inputValChange}
            onChange={(e) => setinputValChange(e.target.value)}
          />
          <button
            onClick={() => changeCardListFunc({ inputValChange, id: i.id })}
          >
            Ok
          </button>
          <button onClick={() => deleteCardListFunc(i.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default CardList;
