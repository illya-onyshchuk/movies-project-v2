import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu } from "@mui/material";

const CardMenu = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          backgroundColor: "rgb(195 193 193 / 31%)",
        }}
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          style: {
            width: "20ch",
          },
        }}
      >
        {children}
      </Menu>
    </>
  );
};

export default CardMenu;
