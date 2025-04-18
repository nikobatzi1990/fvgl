import React from "react";
import { useNavigate } from "react-router-dom";

function EditButton() {
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    const data = e.target.parentElement.parentElement.dataset;
    console.log(data);
    try {
      navigate(`/${data.gameId}/edit`);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  return (
    <button
      className="btn"
      onClick={handleEdit}
      type="button"
      aria-labelledby="edit"
    >
      <i className="bi bi-pencil" id="edit" />
    </button>
  );
}

export default EditButton;
