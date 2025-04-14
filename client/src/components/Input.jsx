import React from "react";
import "../styles/Input.css";

const Input = (props) => {
  const { className, id, placeholder, onChange, type } = props;

  return (
    <div>
      <input
        id={id}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      ></input>
    </div>
  );
};

export default Input;
