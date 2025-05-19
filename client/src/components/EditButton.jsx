import React from "react";
import { useNavigate } from "react-router-dom";

function EditButton() {
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    const { gameId } = e.target.closest("[data-game-id]").dataset;
    try {
      navigate(`/${gameId}/edit`);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  return (
    <button
      className="btn btn-regular"
      onClick={handleEdit}
      type="button"
      aria-labelledby="edit"
    >
      <i className="bi bi-pencil" />
    </button>
  );
}

export default EditButton;
