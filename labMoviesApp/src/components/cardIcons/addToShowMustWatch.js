import React, { useContext } from "react";
import { ShowsContext } from "../../contexts/showsContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const AddToMustWatchIcon = ({ show }) => {
  const context = useContext(ShowsContext);

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    context.addToMustWatch(show);
  };

  return (
    <IconButton aria-label="add to must watch" onClick={handleAddToMustWatch}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchIcon;

