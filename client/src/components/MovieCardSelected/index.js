import React from "react";
import { PropTypes } from "prop-types";

import {
  MenuItem,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Box,
} from "@mui/material/";

import { CardMenu } from "../../components";

const MovieCardSelected = ({ movie, onCardDelete }) => {
  return (
    <Card sx={{ display: "flex", margin: "10px 0" }}>
      <CardMedia
        component="img"
        sx={{ width: "100px" }}
        image={movie.image}
        alt={movie.title}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          position: "relative",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {movie.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {movie.releaseDate}
          </Typography>
        </CardContent>
        <Box sx={{ pl: 2, pb: 1 }}>
          {movie.generes?.length ? (
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {movie.generes[0].name}
            </Typography>
          ) : null}
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Length filme: {movie.runtime}
          </Typography>
        </Box>
        <CardMenu>
          <MenuItem onClick={() => onCardDelete(movie)}>Delete</MenuItem>
        </CardMenu>
      </Box>
    </Card>
  );
};

MovieCardSelected.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    generes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    runtime: PropTypes.number,
  }).isRequired,
  onCardDelete: PropTypes.func,
};

export default MovieCardSelected;
