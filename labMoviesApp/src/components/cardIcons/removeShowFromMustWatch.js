import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { ShowsContext } from "../../contexts/showsContext";

const RemoveFromMustWatchIcon = ({ show }) => {
  const context = useContext(ShowsContext);

  const handleRemoveFromMustWatch = (e) => {
    e.preventDefault();
    context.removeFromMustWatch(show);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromMustWatch}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromMustWatchIcon;