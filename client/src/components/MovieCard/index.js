import React from "react";
import { PropTypes } from "prop-types";
import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
import {
  MenuItem,
  Typography,
  CardContent,
  CardMedia,
  Card,
} from "@mui/material";

import { CardMenu } from "../../components";

const CardInfo = styled(CardContent)(({ theme }) => ({
  "&:last-child": {
    paddingBottom: theme.spacing(2),
  },
}));

const MovieCard = ({ movie, onCardSelect }) => {
  return (
    <Card sx={{ maxWidth: 150, position: "relative" }}>
      <CardMenu>
        <MenuItem onClick={onCardSelect}>Add to favorites</MenuItem>
      </CardMenu>
      <CardMedia
        component="img"
        height="225"
        image={movie.image}
        alt={movie.title}
      />
      <CardInfo>
        <Typography variant="h6" gutterBottom component="div">
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
};

export default MovieCard;
