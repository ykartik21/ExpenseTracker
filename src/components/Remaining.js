import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expense, budget } = useContext(AppContext);
  const totalExpenses = expense.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <div className="remaining tile">
      <span className="tile-value">Remaining $ : {budget - totalExpenses}</span>
    </div>
  );
};

export default Remaining;
