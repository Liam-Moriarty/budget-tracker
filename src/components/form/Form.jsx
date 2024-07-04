import React, { useState } from "react";
import formCss from "./form.module.css";
import { useContext } from "react";
import { BudgetTrackerContext } from "../../context/Context";
import { v4 as uuidv4 } from "uuid";
import { incomeCategories, expenseCategories } from "../../constants/constants";

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  // Add leading zero if month or day is a single digit
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
}

const initialState = {
  type: "income",
  category: "food",
  amount: "",
  date: getDate(),
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(BudgetTrackerContext);

  const createTransactions = (e) => {
    e.preventDefault();

    const transactions = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };

    addTransaction(transactions);
    setFormData(initialState);
  };

  const selectedCategories =
    formData.type === "income" ? incomeCategories : expenseCategories;

  return (
    <form className={formCss.form} onSubmit={createTransactions}>
      <article className={formCss.articleWrapper}>
        {/* TRANSACTION */}
        <div className={formCss.selectWrapper}>
          <label htmlFor="type">Transaction</label>
          <select
            name="type"
            id="type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>
          </select>
        </div>

        {/* CATEGORY */}
        <div className={formCss.selectWrapper}>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategories.map((c) => (
              <option key={c.type} value={c.type}>
                {c.type}
              </option>
            ))}
          </select>
        </div>
      </article>

      <article className={formCss.articleWrapper}>
        {/* AMOUNT */}
        <div className={formCss.selectWrapper}>
          <label>Amount</label>
          <input
            type="number"
            placeholder="Input Amount"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
        </div>

        {/* DATE */}
        <div className={formCss.selectWrapper}>
          <label>Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>
      </article>

      <button className={formCss.create} type="submit">
        CREATE
      </button>
    </form>
  );
};

export default Form;
