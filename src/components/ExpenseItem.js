import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const ExpenseItem = ({ id, name, cost }) => {
  const { dispatch } = useContext(AppContext);
  function handleDeleteItem() {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  }
  return (
    <div className="expenseitem">
      <span className="item item-name">{name}</span>
      <div className="expenseitem-conatainer">
        <span className="item item-price">$ {cost}</span>
        <button className="item-delete" onClick={handleDeleteItem}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
