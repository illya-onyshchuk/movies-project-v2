import React from "react";
import { PropTypes } from "prop-types";
import { styled } from "@mui/material/styles";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  MenuItem,
  Typography,
  CardContent,
  CardMedia,
  Card,
  Box,
} from "@mui/material";

import { CardMenu } from "../../components";

const CardInfo = styled(CardContent)(({ theme }) => ({
  "&:last-child": {
    paddingBottom: theme.spacing(2),
  },
}));

const PlusIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255, 255, 255, .6)",
  cursor: "pointer",
  "&:hover": {
    opacity: 1,
  },
}));

const MovieCard = ({ movie, onCardSelect, isPreviewMode }) => {
  return (
    <Card sx={{ maxWidth: 150, position: "relative" }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="225"
          image={movie.image}
          alt={movie.title}
        />
        {!isPreviewMode && (
          <PlusIcon onClick={() => onCardSelect(movie)}>
            <AddCircleOutlineIcon sx={{ fontSize: 60 }} />
          </PlusIcon>
        )}
      </Box>

      {!isPreviewMode && (
        <CardMenu>
          <MenuItem onClick={() => onCardSelect(movie)}>
            Add to favorites
          </MenuItem>
        </CardMenu>
      )}

      <CardInfo sx={{ width: "100%", padding: 0 }}>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{
            fontSize: "1rem",
            overflowWrap: "break-word",
            width: "100%",
          }}
        >
          {movie.title}
        </Typography>

        <Typography variant="subtitle1" gutterBottom component="div">
          {movie.releaseDate}
        </Typography>
      </CardInfo>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
  }).isRequired,
  onCardSelect: PropTypes.func,
  isPreviewMode: PropTypes.bool,
};

export default MovieCard;
