import React, { useReducer, createContext } from "react";

import contextReducer from "./contextReducer.js";

const initialState = [];

export const BudgetTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // CREATE ACTION CREATORS
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  console.log(transactions);

  return (
    <BudgetTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions }}
    >
      {children}
    </BudgetTrackerContext.Provider>
  );
};
