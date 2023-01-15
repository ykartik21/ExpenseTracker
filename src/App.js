import { useContext } from "react";
import "./App.css";
import AddExpense from "./components/AddExpense";
import Budget from "./components/Budget";
import Expenses from "./components/Expenses";
import Remaining from "./components/Remaining";
import Spent from "./components/Spent";
import { AppContext } from "./context/AppContext";
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">My Budget Planner</h1>
        <div className="value-container">
          <Budget />
          <Remaining />
          <Spent />
        </div>
        <h3 className="title two">Expenses</h3>
        <Expenses />
        <AddExpense />
      </div>
    </div>
  );
}

export default App;
