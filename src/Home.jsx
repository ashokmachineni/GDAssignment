import React from "react";
import "./Home.css";
function Home({ problem }) {
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>{problem.question}</b>
        </h4>
        <p>{problem.answer} </p>
      </div>
    </div>
  );
}

export default Home;
