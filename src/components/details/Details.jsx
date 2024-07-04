import React from "react";
import detailsCss from "./details.module.css";

const Details = ({ title, amount, className }) => {
  return (
    <section
      className={`${
        title === "Income"
          ? detailsCss.detailsWrapperIncome
          : detailsCss.detailsWrapperExpenses
      } ${className}`}
    >
      <div className={detailsCss.titleContainer}>
        <h1>{title}</h1>
        <p>PhP: {amount}</p>
      </div>
    </section>
  );
};

export default Details;
