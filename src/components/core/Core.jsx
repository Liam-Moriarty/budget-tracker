import React from "react";
import coreCss from "./core.module.css";
import Form from "../form/Form";
import History from "../history/History";

const Core = ({ classname }) => {
  return (
    <section className={`${coreCss.coreWrapper} ${classname}`}>
      {/* Title Section */}
      <div className={coreCss.titleContainer}>
        <h1>Budget Tracker</h1>
        <p>Powered by Fernando Ordiales</p>
      </div>

      <div className={coreCss.balanceContainer}>
        <h1>Balance</h1>
        <p>PhP: 30,000</p>
      </div>

      {/* Form Section */}
      <Form />

      {/* Transaction History */}
      <History />
    </section>
  );
};

export default Core;
