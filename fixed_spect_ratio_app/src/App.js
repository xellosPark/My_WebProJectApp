import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Button from "./components/Button";
import sampleData from "./data/sampleData";

const App = () => {
  const [data, setData] = useState(sampleData);

  const addRow = () => {
    const newRow = { id: data.length + 1, name: "New User", age: 20, job: "Tester" };
    setData([...data, newRow]);
  };

  return (
    <div className="container">
      <Table data={data} />
      <div className="button-container">
        <Button />
        <button className="button" onClick={addRow}>
          데이터 추가
        </button>
      </div>
    </div>
  );
};

export default App;