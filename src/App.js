import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import "./App.css";
import Home from "./Home";
import { dataFile } from "./data/data.json";

function App() {
  const [problems, setProblems] = useState([]);
  useEffect(() => {
    fetch(`https://api.npoint.io/48c1009840a82a70dabd`)
      .then(res => res.json())
      .then(data => {
        setProblems(data.stocks);
      });
  }, []);
  return (
    <Paper>
      <h1>Stock Market Q&A</h1>
      <div>
        {problems.map(problem => (
          <Home key={problem.answer} problem={problem} />
        ))}
      </div>
      <div></div>
    </Paper>
  );
}

export default App;
