import React, { useContext, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const Expenses = () => {
  const { expense } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const expenseList = expense.filter((item) => item.name.includes(search));

  return (
    <div className="expenses">
      <input
        type="text"
        className="search-container"
        placeholder="Type to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="expense-list">
        {expenseList.map((item, index) => {
          return (
            <ExpenseItem
              key={index}
              name={item.name}
              cost={item.cost}
              id={item.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Expenses;
