import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  const { className, id, value, onChange, type } = props;

  return (
    <div>
      <input
        id={id}
        className={className}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  id: "",
  className: "",
  value: "",
  type: "text",
};

export default Input;
