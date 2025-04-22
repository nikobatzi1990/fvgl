import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  const { className, id, placeholder, onChange, type } = props;

  return (
    <div>
      <input
        id={id}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string || PropTypes.number,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  id: "",
  className: "",
  placeholder: "",
  type: "text",
};

export default Input;
