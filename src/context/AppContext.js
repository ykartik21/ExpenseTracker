import { createContext, useEffect, useReducer } from "react";
const initialState = {
  budget: 2000,
  expense: [
    {
      id: "12",
      name: "Shopping",
      cost: 510,
    },
    {
      id: "13",
      name: "Food",
      cost: 250,
    },
    {
      id: "14",
      name: "Petrol",
      cost: 540,
    },
    {
      id: "15",
      name: "Movie",
      cost: 150,
    },
  ],
};
export default initialState;

export const AppContext = createContext();

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expense: [...state.expense, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expense: [
          ...state.expense.filter((expense) => expense.id != action.payload),
        ],
      };
    case "EDIT_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };

    default:
      return state;
  }
};

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("exepensesList", JSON.stringify(state));
  }, []);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expense: state.expense,
        dispatch,
        state,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
