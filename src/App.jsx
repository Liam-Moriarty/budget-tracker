import React from "react";
import Details from "./components/details/Details";
import Core from "./components/core/Core";

const App = () => {
  return (
    <main className="app">
      <div className="wrapper">
        <Details title="Income" amount="1,000" className="item item1" />
        <Core className="item item2" />
        <Details title="Expenses" amount="5,000" className="item item3" />
      </div>
    </main>
  );
};

export default App;
