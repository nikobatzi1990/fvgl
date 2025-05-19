import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

function DeleteButton(props) {
  const { refreshList } = props;
  const handleDeletion = async (e) => {
    e.preventDefault();
    const { gameId } = e.target.closest("[data-game-id]").dataset;
    try {
      await axios.delete(`/api/games/${gameId}/deletion/`);
      if (refreshList) {
        refreshList();
      }
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  return (
    <button
      className="btn btn-regular"
      onClick={handleDeletion}
      type="button"
      aria-labelledby="delete"
    >
      <i className="bi bi-trash3" />
    </button>
  );
}

DeleteButton.propTypes = {
  refreshList: PropTypes.func.isRequired,
};

export default DeleteButton;
