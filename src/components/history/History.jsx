import React, { useContext } from "react";
import { BudgetTrackerContext } from "../../context/Context";
import historyCss from "./history.module.css";
import { IoMdTrash } from "react-icons/io";
import { FaBitcoin, FaCreditCard } from "react-icons/fa";
import dayjs from "dayjs";

const History = () => {
  const { deleteTransaction, transactions } = useContext(BudgetTrackerContext);

  function formatText(str) {
    str = str.toLowerCase().split(" ");

    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    return str.join(" ");
  }

  const handleDelete = (id) => {
    deleteTransaction(id);
  };

  return (
    <section className={historyCss.historyWrapper}>
      <h1>Transaction History</h1>

      {/* HISTORY */}
      <div className={historyCss.transactionWrapper}>
        {transactions.map((item, key) => (
          <div key={key} className={historyCss.contentWrapper}>
            <div className={historyCss.iconWrapper}>
              {item.type === "income" ? (
                <FaBitcoin className={historyCss.iconIncome} />
              ) : (
                <FaCreditCard className={historyCss.iconExpenses} />
              )}
            </div>

            <div className={historyCss.content}>
              <h2>{formatText(item.category)}</h2>
              <div className={historyCss.subcontent}>
                <p>
                  <span>₱</span> {item.amount.toLocaleString()}
                </p>
                <p>{dayjs(item.date).format("DD-MM-YYYY")}</p>
              </div>
            </div>

            <div className={historyCss.iconWrapper}>
              <IoMdTrash
                className={historyCss.iconDelete}
                onClick={(e) => handleDelete(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default History;
