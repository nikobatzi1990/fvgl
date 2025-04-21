import React from "react";
import axios from "axios";

function DeleteButton() {
  const handleDeletion = async (e) => {
    e.preventDefault();
    const data = e.target.parentElement.parentElement.dataset;
    try {
      await axios.delete(`/api/games/${data.gameId}/deletion/`);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  return (
    <button
      className="btn btn-primary"
      onClick={handleDeletion}
      type="button"
      aria-labelledby="delete"
    >
      <i className="bi bi-trash3" id="delete" />
    </button>
  );
}

export default DeleteButton;
