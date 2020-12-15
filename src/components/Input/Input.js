import React from "react";

//styles
import "./Input.sass";

//components

export const Input = ({ type = "num" }) => {
  //const [value, setValue] = useState('')

  let ph = ["Debt"];

  if (type === "text") ph = "Name";
  if (type === "num") ph = "Debt";

  return (
    <>
      <input
        type="text"
        className="input"
        placeholder={ph}
        // value={inputValue}
        // onChange={}
        size="10"
      />
    </>
  );
};
