import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";
const AddExpense = () => {
  const { dispatch } = useContext(AppContext);
  const [cost, setCost] = useState("");
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Name : ${name} Cost : ${cost}`);
    setCost("");
    setName("");
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  }
  return (
    <form className="addexpense" onSubmit={handleSubmit}>
      <h1 className="title">Add Expenses</h1>
      <div className="top">
        <div className="additem-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="additem"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="additem-container">
          <label htmlFor="cost">Cost</label>
          <input
            type="number"
            className="additem"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
      </div>

      <button className="btn">Save</button>
    </form>
  );
};

export default AddExpense;
