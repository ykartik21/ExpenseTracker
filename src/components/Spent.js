import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Spent = () => {
  const { budget, expense } = useContext(AppContext);
  const totalSpent = expense.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  return (
    <div className="spent tile">
      <span className="tile-value">Spenting so far $ : {totalSpent}</span>
    </div>
  );
};

export default Spent;
