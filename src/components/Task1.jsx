import React, { useState } from "react";

const Task1 = () => {
  const [text, setText] = useState("Ержан, вставай, на работу пора");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      {}
      <p>{text}</p>

      {}
      <input type="text" value={text} onChange={handleInputChange} />
    </div>
  );
};

export default Task1;
