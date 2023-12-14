import React, { useState } from "react";
import "./app.css";

const Task2 = () => {
  const [isTrue, setIsTrue] = useState(true);

  return (
    <div>
      <div className={`square ${isTrue ? "true" : "false"}`}>
        {isTrue ? <p>Задача верна</p> : <p>Задача не верна</p>}
      </div>
      <button id="true" onClick={() => setIsTrue(!isTrue)}>
        Задача true/false
      </button>
    </div>
  );
};

export default Task2;
