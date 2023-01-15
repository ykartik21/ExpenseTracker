import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const [edit, setEdit] = useState(false);
  const { budget, dispatch } = useContext(AppContext);
  const [budgetValue, setBudegetValue] = useState(budget);
  function handleEdit() {
    setEdit(!edit);
  }
  function handleSave() {
    dispatch({ type: "EDIT_BUDGET", payload: budgetValue });
    setEdit(!edit);
  }

  return (
    <div className="budget tile">
      {edit == false ? (
        <span className="tile-value">Budget $ : {budget}</span>
      ) : (
        <div className="tile-value">
          <input
            type="number"
            className="edit-budget"
            value={budgetValue}
            onChange={(e) => setBudegetValue(e.target.value)}
          />
        </div>
      )}
      {edit == false ? (
        <button className="btn" onClick={handleEdit}>
          Edit
        </button>
      ) : (
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      )}
    </div>
  );
};

export default Budget;
